// ════════════════════════════════════════════════════════
//  ZAWYA — Supabase Configuration
//  ضع هنا بيانات مشروعك من Supabase Dashboard
//  Settings → API → Project URL + anon key
// ════════════════════════════════════════════════════════

const SUPABASE_URL  = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON = 'YOUR_ANON_KEY_HERE';

window._supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
