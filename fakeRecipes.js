const recipes = [
  {
    id: '1',
    name: 'Knäckebröd med avokado & ägg',
    image: '/frukost/ID-1.png',
    ingredients: ['2 knäckebröd', '1 avokado', '2 kokta ägg', 'salt', 'peppar'],
    instructions: ['Bre avokado på knäckebröd.', 'Lägg på äggskivor.'],
    nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
    cookTime: '5 min',
    difficulty: 3,
    category:"Frukost",
    description: "Knäckebröd med avokado & ägg",
    protein: "Vegetarisk",
    rating: 5,
  },
  {
    id: '2',
    name: 'Youghurt med granola & banan',
    image: '/frukost/ID-2.png',
    ingredients: ['200 g laktosfri yoghurt', '80 g granola', '1 banan', 'kanel'],
    instructions: ['Häll yoghurt i skål.', 'Toppa med granola och banan.'],
    nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
    cookTime: '3 min',
    difficulty: 1,
    category:"Frukost",
    description: "Youghurt med granola & banan",
    protein: "Vegetarisk",
    rating: 3
  },
  {
    id: '3',
    name: 'Fullkornsbröd med pålägg',
    image: '/frukost/ID-3.png',
    ingredients: ['4 skivor fullkornsbröd', '4 kycklingpålägg', 'gurka', 'tomat'],
    instructions: ['Grilla bröd.', 'Lägg på pålägg och grönsaker.'],
    nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
    cookTime: '10 min',
    difficulty: 1,
    category:"Frukost",
    description: "Fullkornsbröd med pålägg",
    protein: "Vegetarisk",
    rating: 3
  },
  /*{
    id: '4',
    name: 'Ägg & bacon med gröt',
    image: '/frukost/ID-4.png',
    ingredients: ['2 ägg', '80 g bacon', '200 g havregrynsgröt', '50 g bär'],
    instructions: ['Stek ägg och bacon.', 'Servera med gröt och bär.'],
    nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
    cookTime: '15 min',
    difficulty: 1,
    category:"Frukost",
    description: "Ägg & bacon med gröt",
    protein: "Bacon",
    rating: 4
  },
   {
    id: '5',
    name: 'Smoothie med kvarg',
    image: '/frukost/ID-5.png',
    ingredients: ['200 g laktosfri kvarg', '1 banan', '100 laktosfri mjölk', '30 g whey'],
    instructions: ['Mixa allt till slät smoothie.'],
    nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
    cookTime: '5 min',
    difficulty: 1,
    category:"Frukost",
    description: "Smoothie med kvarg",
    protein: "Vegetarisk",
    rating: 4
  }, 
     {
    id: '6',
    name: 'Havrepankakor med bacon',
    image: '/frukost/ID-6.png',
    ingredients: ['2 ägg', '80 g havrekli', '1 banan', '80 g bacon'],
    instructions: ['Mixa banan, ägg och havrekli.', 'Stek pannkakor och bacon.'],
    nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
    cookTime: '20 min',
    difficulty: 2,
    category:"Frukost",
    description: "Havrepankakor med bacon",
    protein: "Bacon",
    rating: 4
  },*/
     {
    id: '7',
    name: 'Keso med bär & nötter',
    image: '/frukost/ID-7.png',
    ingredients: ['240 g keso', '100 g bär', '60 g cashewnötter'],
    instructions: ['Blanda keso med bär och nötter.'],
    nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
    cookTime: '5 min',
    difficulty: 1,
    category:"Frukost",
    description: "Keso med bär & nötter",
    protein: "Vegetarisk",
    rating: 2
  },
      {
    id: '8',
    name: 'English Breakfast',
    image: '/frukost/ID-8.png',
    ingredients: ['4 ägg', '4 bacon slices', '2 korvar', '1 burk bönor i tomatsås', '2 tomater', '4 svamp'],
    instructions: [' Stek bacon, korv, tomater och svamp.', 'Göra stekta/stannade ägg.', 'Värm bönor.'],
    nutrition: { Calories: '500 kcal', Protein: '30g', Carbs: '40g', Fat: '25g' },
    cookTime: '25 min',
    difficulty: 1,
    category:"Frukost",
    description: "English Breakfast",
    protein: "Bacon",
    rating: 3
  },

   {
    id: '100',
    name: 'Kyckling i gräddsås med zucchini',
    image: '/lunch/ID-100.png',
    ingredients: ['600 g kycklingbröst', '2 dl gräddfil', '2 vitlöksklyftor', '1 gul lök', '3 zucchini', '2 msk olivolja'],
    instructions: ['Fräs kyckling, lök och vitlök i olja.', 'Tillsätt zucchini och gräddfil.',
'Låt sjuda 10 min.',],
    nutrition: { Calories: '650 kcal', Protein: '25 g', Carbs: '75 g', Fat: '25 g' },
    cookTime: '25 min',
    difficulty: 1,
    category:"Lunch",
    description: "Kyckling i gräddsås med zucchini",
    protein: "Kyckling",
    rating: 5
  },
   {
    id: '101',
    name: 'Biff med lök och rödkålssallad',
    image: '/lunch/ID-101.png',
    ingredients: ['600 g biff', '2 lökar', '½ rödkål', '1 msk vinäger', '2 msk olivolja'],
    instructions: ['Stek biff och lök.', 'Blanda rödkål med vinäger och olja.'],
    nutrition: { Calories: '650 kcal', Protein: '25 g', Carbs: '75 g', Fat: '25 g' },
    cookTime: '20 min',
    difficulty: 1,
    category:"Lunch",
    description: "Biff med lök och rödkålssallad",
    protein: "Nöt",
    rating: 3
  },
     {
    id: '102',
    name: 'Fläskkotletter med vitlöksbroccoli',
    image: '/lunch/ID-102.png',
    ingredients: ['6 fläskkotletter', '1 broccoli', '3 vitlöksklyftor', '2 msk smör'],
    instructions: ['Krydda och grilla kotletter.', 'Stek broccoli med vitlök och smör.'],
    nutrition: { Calories: '650 kcal', Protein: '25 g', Carbs: '75 g', Fat: '25 g' },
    cookTime: '30 min',
    difficulty: 2,
    category:"Lunch",
    description: "Fläskkotletter med vitlöksbroccoli",
    protein: "Fläsk",
    rating: 3
  },
    {
    id: '103',
    name: 'Tonfisksallad med avokado',
    image: '/lunch/ID-103.png',
    ingredients: ['3 burkar tonfisk', '3 msk majonnäs', '2 avokador', '6 salladsblad'],
    instructions: ['Blanda tonfisk, majonnäs och avokado.', 'Servera på salladsblad.'],
    nutrition: { Calories: '650 kcal', Protein: '25 g', Carbs: '75 g', Fat: '25 g' },
    cookTime: '10 min',
    difficulty: 1,
    category:"Lunch",
    description: "Tonfisksallad med avokado",
    protein: "Fisk",
    rating: 3
  },
      {
    id: '104',
    name: 'Vitlöksfisk med spenatsallad',
    image: '/lunch/ID-104.png',
    ingredients: ['600 g torsk', '3 vitlöksklyftor', '2 msk smör', '200 g spenat'],
    instructions: ['Stek fisk med vitlök och smör.', 'Blanda spenat med olja.'],
    nutrition: { Calories: '650 kcal', Protein: '25 g', Carbs: '75 g', Fat: '25 g' },
    cookTime: '20 min',
    difficulty: 1,
    category:"Lunch",
    description: "Vitlöksfisk med spenatsallad",
    protein: "Fisk",
    rating: 3
  },
      {
    id: '105',
    name: 'Salladstacos med bacon',
    image: '/lunch/ID-105.png',
    ingredients: ['450 g nötfärs', '1 påseTacokrydda', '90 g bacon', '6 salladsblad', '1 tomat'],
    instructions: ['Stek bacon och färs.', ' Servera i salladsblad med tomat.'],
    nutrition: { Calories: '650 kcal', Protein: '25 g', Carbs: '75 g', Fat: '25 g' },
    cookTime: '15 min',
    difficulty: 1,
    category:"Lunch",
    description: "Salladstacos med bacon",
    protein: "Bacon",
    rating: 3
  },
     {
    id: '106',
    name: 'Stekt fläsk med löksås',
    image: '/lunch/ID-106.png',
    ingredients: ['600 g fläsk (sidfläsk eller bog)', ' 2 stora lökar', '2 dl grädde', '1 msk smör', '1 tsk senap'],
    instructions: ['Stek fläsket knaprigt.', 'Fräs lök i smör, tillsätt grädde och senap.', 'Låt såsen tjockna.'],
    nutrition: { Calories: '650 kcal', Protein: '25 g', Carbs: '75 g', Fat: '25 g' },
    cookTime: '35 min',
    difficulty: 1,
    category:"Lunch",
    description: "Stekt fläsk med löksås",
    protein: "Fläsk",
    rating: 5
  },
     {
    id: '107',
    name: 'Falukorv i ugn med äpple',
    image: '/lunch/ID-107.png',
    ingredients: ['600 g falukorv', '2 äpplen', '1 msk sirap', '1 tsk senap', '1 dl vispgrädde'],
    instructions: ['Skiva korv och äpplen.', 'Blanda sirap, senap och grädde.', 'Gratinera i ugn 20 min.'],
    nutrition: { Calories: '650 kcal', Protein: '25 g', Carbs: '75 g', Fat: '25 g' },
    cookTime: '30 min',
    difficulty: 1,
    category:"Lunch",
    description: "Falukorv i ugn med äpple",
    protein: "Fläsk",
    rating: 4
  },
     {
    id: '108',
    name: 'Pannbiff med löksky',
    image: '/lunch/ID-108.png',
    ingredients: ['600 g blandfärs', '1 ägg', '1 dl ströbröd', '2 lökar', '2 dl grädde'],
    instructions: ['Blanda färs, ägg och ströbröd.', 'Forma biffar och stek.', 'Göra löksky av lök och grädde.'],
    nutrition: { Calories: '650 kcal', Protein: '25 g', Carbs: '75 g', Fat: '25 g' },
    cookTime: '25 min',
    difficulty: 1,
    category:"Lunch",
    description: "Pannbiff med löksky",
    protein: "Nöt",
    rating: 4
  },
     {
    id: '109',
    name: 'Lövbiffspanna med champinjoner',
    image: '/lunch/ID-109.png',
    ingredients: ['600 g lövbiff', '200 g champinjoner', '2 vitlöksklyftor  ', '2 msk smör'],
    instructions: ['Skiva kött och svamp.', 'Stek allt i smör med vitlök.', ' Krydda med peppar.'],
    nutrition: { Calories: '650 kcal', Protein: '25 g', Carbs: '75 g', Fat: '25 g' },
    cookTime: '20 min',
    difficulty: 2,
    category:"Lunch",
    description: "Lövbiffspanna med champinjoner",
    protein: "Nöt",
    rating: 4
  },
];