'use strict';

const MOCK_RECIPE_UPDATES = [
  {
    'Title': 'The Shawshank Redemption',
    '_year_data': '1994',
    'Runtime': '2h 22min',
    'genre': 'Crime, Drama',
    'Plot': 'Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man\'s unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.',
    'Cuisine': 'Beef Shank' 

  },
  {
    'Title': 'The Godfather',
    '_year_data': '1972',
    'Runtime': '2h 55min',
    'genre': 'Crime, Drama',
    'Plot': 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    'Cuisine': 'Italian'

  },
  {
    'Title': 'The Godfather: Part II',
    '_year_data': '1974',
    'Runtime': '3h 22min',
    'genre': 'Crime, Drama ',
    'Plot': 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate',
    'Cuisine': 'Italian' 

  },
  {
    'Title': 'The Dark Knight',
    '_year_data': '2008',
    'Runtime': '2h 32min',
    'genre': 'Action, Crime, Drama',
    'Plot': 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    'Cuisine': '' 

  },
  {
    'Title': '12 Angry Men',
    '_year_data': '1957',
    'Runtime': '1h 36min',
    'genre': 'Crime, Drama',
    'Plot': 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
    'Cuisine': '' 

  }
];



//User should be able to provide zip and search for: (/)
// - movie that will be matched to related foods and nearby restaurants
// - food that will be matched to related movies and nearby restaurants

//User should choose a pairing from the search results (CREATE)

//User should be able to view their selected pairing(s) (READ)

//User should (later) rate pairing (UPDATE)
// - can write review
// - can add other tag suggestions

//User should be able to delete any of their pairings (DELETE)