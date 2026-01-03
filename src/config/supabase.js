const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://gmwspbobwxflqrvkyqmj.supabase.co';
const supabaseKey = 'sb_publishable_S6DdY0PXY4krL8mPrqtgsA_eCFWgBi0';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;