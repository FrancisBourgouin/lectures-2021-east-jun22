## Building an ERD 

### Example of ERD box

+------------+
| TITLE HERE |
+------------+
|            |
|            |
|            |
|            |
|            |
|            |
+------------+

### Description of your relationship

We are listing the relationship for a store that sells one product. The store wants to track customer and order information.

Customer information includes: id (PK), name, phone, email
Order information includes: id(PK), quantity, price, customer_id(FK), date_purchased, product_id(FK)
Product table: id(PK), name, supplier, description

### ERD describing the relationship

+------------+
| customer   |
+------------+
|  id(PK)    |
|  name      |
|  phone     |
|  email     |
+------------+

+------------+
| order      |
+------------+
|     id     |
|     quantity       |
|          price  |
|            customer_id|
|            date_purchased|
|            |
+------------+