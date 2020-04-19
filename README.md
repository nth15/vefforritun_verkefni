# Vefforritun verkefni

Verkefni i vefforritun 2020

1. Búa til gagnagrunn, t.d. `createdb 2019-h1-synilausn`
2. Búa til Cloudinary aðgang
3. Afrita `.env_example` í `.env` og setja upplýsingar fyrir
  a. Gagnagrunn
  b. Cloudinary
4. Keyra `npm run setup` til að:
  a. Útbúa gagnagrunn og fylla af gögnum búnum til með `faker`
  b. Færa allar myndir úr `img` í Cloudinary
  c. Útbúa grunn notendur
  d. Útbúa pantanir og körfu fyrir notendur

```bash
createdb 2019-h1-synilausn
cp .env_example .env # Stilla breytur sem er krafist
npm install
npm test -s
npm run setup -s
npm run dev
```