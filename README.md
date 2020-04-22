# Vefforritun verkefni

> Verkefni i vefforritun 2020

## Table of contents
- [Almennt](#almennt)
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
├── sql                # postgresql skipanir búa til töflur og setja inn viðeigandi gögn
├── utils              #
├── app.js             # Keyrir upp netþjóninn
├── package.json       # Pakkar sem að þarf til að keyra kóðan
├── package-lock.json  # Pakkar sem að package.json þarf
├── README.md
└── setup.js`          # Setur upp gagnagrunninn
```
```
├── api
│   ├── categories.js
│   ├── index.js       # Sér um Routes
│   ├── orders.js
│   ├── products.js
│   └── users.js
├── ...
```

## Tækni

- Gagnagrunnur: [Postgresql 11.7](https://www.postgresql.org/)
- Hýst á: [Heroku](https://www.heroku.com/)
   - api: 
### Node
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [dotenv](https://github.com/motdotla/dotenv)
- [express](https://github.com/expressjs/express)
- [faker]()
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [multer](https://github.com/expressjs/multer)
- [passport](https://github.com/jaredhanson/passport)
- [passport-jwt](https://github.com/mikenicholson/passport-jwt)
- [pg](https://github.com/brianc/node-postgres)
- [xss](https://github.com/leizongmin/js-xss)


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