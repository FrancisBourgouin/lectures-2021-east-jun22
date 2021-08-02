## Building an ERD 

### Example of ERD box

      +-----------------------+            
      |   TITLE               |
      +-----------------------+
PK    | id                    
      | FLEABAG               |
      | PEAKY BLINDERS        |
      | BREAKING BAD          |
      | PARKS AND RECREATION  |
      | BRIDGERTON            |
      | THEM                  |
      +-----------------------+

      +------------+
      |TITLE_SEASONS|
      +------------+
PK    | id          |
FK    | seasons_id  |
FK    | title_id    |
      +-------------+

      +------------+
      |   SEASONS   |
      +------------+
PK    | id          |
      | 2           |
      | 5           |
      | 6           |
      | 8           |
      | 1           |
      | 1           |
      +-------------+


### Description of your relationship
Many-to-Many

### ERD describing the relationship
