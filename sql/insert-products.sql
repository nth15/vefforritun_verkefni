INSERT INTO categories (id, title) VALUES (1, 'Pizzur');
INSERT INTO categories (id, title) VALUES (2, 'Hamborgarar');
INSERT INTO categories (id, title) VALUES (3, 'Drykkir');

INSERT INTO
  products
    (id, title, price, description, category_id)
  VALUES
    (5, 'Margherita ', 1200, 'Sósa og ostur', 1);

INSERT INTO
  products
    (id, title, price, description, category_id)
  VALUES
    (6, 'Pepporoni ', 1300, 'Sósa, ostur og pepperoni', 1);

INSERT INTO
  products
    (id, title, price, description, category_id)
  VALUES
    (7, 'Hawaii ', 1300, 'Sósa, ostur, skinka og anannas', 1);


INSERT INTO
  products
    (id, title, price, description, category_id)
  VALUES
    (8, 'Ostborgari ', 1400, 'Kál, sósa ostur', 2);

INSERT INTO
  products
    (id, title, price, description, category_id)
  VALUES
    (9, 'Beikonborgari ', 1500, 'Kál, sósa, ostur og beikon ', 2);


INSERT INTO
  products
    (id, title, price, description, category_id)
  VALUES
    (10, 'Carlsberg', 1200, 'Kannski besti bjór í heimi', 3);

INSERT INTO
  products
    (id, title, price, description, category_id)
  VALUES
    (11, 'Pepsimax', 400, 'Sykurlaust!', 3);