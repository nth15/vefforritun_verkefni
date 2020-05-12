-- Bæta við pöntunum og körfu fyrir notendur
INSERT INTO
  orders
    (id, user_id, name, totalPrice, order_created, order_processed)
  VALUES
    (1, 2, 'Óli skóli', 1000, current_timestamp, true);

INSERT INTO orderLines (quantity, product_id, order_id) VALUES (3, 5, 1);
INSERT INTO orderLines (quantity, product_id, order_id) VALUES (1, 6, 1);

INSERT INTO
  orders
    (id, user_id, name, totalPrice, order_created, order_processed)
  VALUES
    (2, 2, 'Óli', 1005, current_timestamp, true);

INSERT INTO orderLines (quantity, product_id, order_id) VALUES (1, 5, 2);
INSERT INTO orderLines (quantity, product_id, order_id) VALUES (13, 6, 2);
INSERT INTO orderLines (quantity, product_id, order_id) VALUES (2, 7, 2);

INSERT INTO
  orders
    (id, user_id, totalPrice, order_processed)
  VALUES
    (3, 2, 10000, false);

INSERT INTO orderLines (quantity, product_id, order_id) VALUES (2, 6, 3);
INSERT INTO orderLines (quantity, product_id, order_id) VALUES (1, 7, 3);
