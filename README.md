# supaship-io

## Local development

### Frontend Setup

```
npm create vite . # create vite template in current directory
npm i
npm run dev # run dev server
npm run build # build dist/ directory
```

### Supabase CLI

```
npm i -D supabase
npx supabase --version # verify supabase installation
npx supabase init # init supabase/ directory
npx supabase start # start supabase on Docker (up to 10 min)
npx supabase migration new starting-ddl # create first migration file
```