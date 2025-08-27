# Setting up the Likes Table

## Overview
The `/pages/api/like.ts` endpoint expects a `likes` table with the following structure:
- `id`: BIGSERIAL PRIMARY KEY (auto-generated)
- `ip_address`: TEXT (stores the IP address of the person who liked)
- `created_at`: TIMESTAMPTZ with DEFAULT NOW() (auto-generated timestamp)

## SQL to Create the Table

Execute this SQL in your Supabase SQL Editor:

```sql
-- Create the likes table
CREATE TABLE likes (
    id BIGSERIAL PRIMARY KEY,
    ip_address TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX idx_likes_ip_address ON likes(ip_address);
CREATE INDEX idx_likes_created_at ON likes(created_at);

-- Optional: Add Row Level Security (RLS) policies if needed
ALTER TABLE likes ENABLE ROW LEVEL SECURITY;

-- Example policy to allow public reads and inserts
CREATE POLICY "Allow public read access" ON likes FOR SELECT TO public USING (true);
CREATE POLICY "Allow public insert access" ON likes FOR INSERT TO public WITH CHECK (true);
```

## How to Create the Table

### Option 1: Supabase Dashboard (Recommended)
1. Go to [your Supabase dashboard](https://supabase.com/dashboard/project/zcpftyszzmflvtrrnjge)
2. Navigate to the "SQL Editor" tab
3. Create a new query
4. Paste the SQL code above
5. Click "Run" to execute

### Option 2: psql Command Line
If you have psql installed and can access your database password:

```bash
psql "postgresql://postgres:[YOUR_DB_PASSWORD]@db.zcpftyszzmflvtrrnjge.supabase.co:5432/postgres" -c "
CREATE TABLE likes (
    id BIGSERIAL PRIMARY KEY,
    ip_address TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_likes_ip_address ON likes(ip_address);
CREATE INDEX idx_likes_created_at ON likes(created_at);
"
```

## Verification

After creating the table, you can verify it works by running:

```bash
node scripts/create-likes-table.js
```

This script will test the table structure and confirm everything is set up correctly.

## Table Structure Details

The table matches exactly what your API endpoint expects:
- The API inserts records with only the `ip_address` field
- The `id` and `created_at` columns are automatically populated by PostgreSQL
- The structure supports the existing `/pages/api/like.ts` implementation

## Security Considerations

- The table includes IP addresses, so consider privacy implications
- Row Level Security policies can be added if you need more granular access control
- The indexes will help with performance as the table grows