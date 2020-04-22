# Vefforritun verkefni

> Verkefni i vefforritun 2020

## Table of contents
- [Almennt](#almennt)
- [Myndir](#myndir)
- [Tækni](#tækni)
- [Uppsetning](#uppsetning)
- [Höfundur](#höfundur)

## Almennt

###  Skráa uppbygging og möppuskipulag
```
├── api                # Annast beiðnir fyrir netþjón
├── authentication     # Staðfestir notenda
├── data               # 
├── img                # Myndir
├── sql                # postgresql skipanir búa til töflur 
│                        og setja inn viðeigandi gögn
├── utils              #
├── app.js             # Keyrir upp netþjóninn
├── package.json       # Pakkar sem að þarf til að keyra kóðan
├── package-lock.json  # Pakkar sem að package.json þarf
├── README.md
└── setup.js`          # Setur upp gagnagrunninn
```

## Myndir

## Tækni


## Uppsetning
1. Búa til gagnagrunn
2. Afrita `.env_example` í `.env` og setja upplýsingar fyrir Gagnagrunn
3. Keyra `npm run setup` til að:

### Dæmi um uppsentnigu og keyrslu
```bash
createdb vefsida            # Býr til gagnagrunn
cp .env_example .env        # Stilla breytur sem er krafist
npm install                 # Setur upp pakka úr package.json
npm test -s                 # Keyrir eslint
npm run setup -s            # Keyrir setup.js
npm run dev                 # Keyrir nodemon á app.js
```

## Höfundur 
- Nökkvi Þórsson
- nth15@hi.is