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
styles has many-to-many relatitionship with cusomers by linking through order-items

ZARA styles   
* id  SERIAL AS PRIMARY KEY
* size
* price
* description 

BRIDGE order-items 
* id
* style_id
* customer_id
* date 

customers
* id
* name
* phone#
* address
* payment

### ERD describing the relationship
+------------+
| customers |
+------------+
|* id SERIAL AS PRIMARY KEY
* name
* phone#
* address
* payment    |
|            |
|            |
|            |
|            |
|            |        
+------------+    
| order-items  |
+------------+
| * id SERIAL AS PRIMARY KEY
(FK)* style_id
(FK)* customer_id
* date           |
|            |
|            |
|            |
|            |
|            |
+------------+
+------------+
| ZARA styles  |
+------------+
| * id SERIAL AS PRIMARY KEY
* size
* price
* description|
|            |
|            |
|            |
|            |
|            |
+------------+