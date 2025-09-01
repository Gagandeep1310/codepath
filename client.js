import { createClient } from '@supabase/supabase-js';

const URL = 'https://fbdsvjlozqrbzdjlkfhk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiZHN2amxvenFyYnpkamxrZmhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NTYxNTcsImV4cCI6MjA3MjIzMjE1N30.GMRhT3vTeAiyvtbN-NHn4jjo2Roh3CAZDDjpi6U85X4';

export const supabase = createClient(URL, API_KEY);
