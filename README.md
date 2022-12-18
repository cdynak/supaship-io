# supaship-io

## Local development

### Frontend Setup

```
npm create vite . # create vite template in current directory
npm i
npm run dev # run dev server (keep it running)
npm run build # build dist/ directory
```

### Supabase CLI

```
npm i -D supabase
npx supabase --version # verify supabase installation
npx supabase init # init supabase/ directory
npx supabase start # start supabase on Docker (up to 10 min) (keep it running)
npx supabase migration new starting-ddl # create first migration file
```

### Playwright E2E Testing

```
npm create playwright # init Playwright (up to 5 min)
npm i -D detect-port
```

### Styling

```
npm i -D tailwindcss
npx tailwind init
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch # watch Tailwind CSS classes (keep it running)
```