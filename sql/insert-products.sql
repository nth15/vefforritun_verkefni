INSERT INTO categories (id, title) VALUES (1, 'Pizzur');
INSERT INTO categories (id, title) VALUES (2, 'Hamborgarar');
INSERT INTO categories (id, title) VALUES (3, 'Drykkir');

INSERT INTO
  products
    (id, title, price, description, category_id)
  VALUES
    (5, 'Margherita ', 1200, 'Svaka gott', 1);


INSERT INTO
  products
    (id, title, price, description, category_id)
  VALUES
    (6, 'Ostborgari ', 1400, 'Mjög gott', 2);


INSERT INTO
  products
    (id, title, price, description, category_id)
  VALUES
    (7, 'Carlsberg ', 1200, 'Kannski besti bjór í heimi', 3);