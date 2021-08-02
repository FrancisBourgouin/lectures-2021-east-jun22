# Water plant thingy

# Info

Show a list of tiles representing plants, with their name, and the last time they were watered.

- last watered
- watering interval
- type of plant
- name

# Data

One plant

```jsx
  {
    lastWatered:"date",
    name:"",
    type:"",
    wateringInterval:int
  }
```

Multiple plants 

```jsx
  [{},{}] // Little / no manipulation

  {1:{}, 2:{}} // Lots of manipulation
```

# Mock data

```jsx
[
  {lastWatered:"2021-08-02",name:"Staghorn Fern",type:"Fern",wateringInterval:4},
  {lastWatered:"2021-08-01",name:"Monstera",type:"Tropical",wateringInterval:7},
  {lastWatered:"2021-07-22",name:"Pothos",type:"Tropical",wateringInterval:6},
  {lastWatered:"2021-07-02",name:"Calathea",type:"Tropical",wateringInterval:10},
]
```

# HTML Structure

body
  header
    h1 (title)
  main
    article
      h1  (name + type)
      p (last watered)
      p (water interval)


# React Components

App
Header (?)
PlantList
  Plant / PlantListItem