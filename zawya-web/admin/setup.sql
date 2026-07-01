-- ════════════════════════════════════════════════════════
--  ZAWYA — Supabase Database Setup
--  Run this in Supabase Dashboard → SQL Editor
-- ════════════════════════════════════════════════════════

-- 1. Create library_items table
CREATE TABLE IF NOT EXISTS library_items (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT NOT NULL,
  name_ar     TEXT,
  description TEXT,
  category    TEXT NOT NULL,
  difficulty  TEXT DEFAULT 'basic' CHECK (difficulty IN ('basic','intermediate','advanced')),
  prompt_part TEXT NOT NULL,
  tags        TEXT[] DEFAULT '{}',
  image_url   TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON library_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- 3. Row Level Security
ALTER TABLE library_items ENABLE ROW LEVEL SECURITY;

-- Public can READ
CREATE POLICY "public_read" ON library_items
  FOR SELECT USING (true);

-- Only authenticated users can write
CREATE POLICY "auth_write" ON library_items
  FOR ALL USING (auth.role() = 'authenticated');

-- 4. Storage bucket for images
-- Go to: Storage → Create bucket → Name: "item-images" → Public: YES
-- Then add this policy:
-- INSERT → authenticated users only
-- SELECT → public

-- 5. Sample data (optional — remove if not needed)
INSERT INTO library_items (title, name_ar, description, category, difficulty, prompt_part, tags) VALUES
('Dutch Angle Shot',    'الإطار المائل',    'الكاميرا مائلة على محورها لتعطي إحساساً بعدم الاستقرار والتوتر',         'camera-work',  'basic',        'dutch angle, tilted camera, canted frame, psychological tension',                 ARRAY['dramatic','tension','cinematic']),
('Golden Hour Lighting','الساعة الذهبية',   'الضوء الدافئ والناعم بعد الشروق أو قبل الغروب، يُعطي ألواناً ذهبية',     'lighting',     'basic',        'golden hour, warm amber light, soft directional sun, long shadows, magic hour',   ARRAY['warm','cinematic','outdoor']),
('35mm Classic',        'كلاسيك 35 مم',    'منظور قريب من العين البشرية — الأكثر استخداماً في السينما',               'lenses',       'basic',        '35mm lens, classic cinematic perspective, natural framing',                       ARRAY['cinematic','portrait','classic']),
('Flat Lay',            'فلات لاي',         'الكاميرا مباشرة فوق المنتج وهو موضوع أفقياً — شائعة جداً على إنستجرام',  'angles',       'basic',        'flat lay, top down product shot, overhead view, social media style',             ARRAY['product','overhead','minimal']),
('Soft Box Lighting',   'إضاءة سوفت بوكس', 'صندوق إضاءة كبير يُوزع الضوء بالتساوي — نتيجة نظيفة ومهنية',            'lighting',     'basic',        'soft box product lighting, even diffused light, no harsh shadows',               ARRAY['product','clean','studio']);
