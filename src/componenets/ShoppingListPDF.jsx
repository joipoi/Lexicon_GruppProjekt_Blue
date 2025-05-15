import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    backgroundColor: '#FFF8F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D4A55E',
  },
  logo: {
    width: 100,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B5694D',
    marginBottom: 5,
  },
  date: {
    fontSize: 10,
    color: '#8C7B6B',
  },
  daySection: {
    marginBottom: 15,
  },
  dayHeader: {
    backgroundColor: '#8A9B7E',
    color: 'white',
    padding: 5,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  mealRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  mealType: {
    width: 70,
    fontWeight: 'bold',
    color: '#3A3226',
    fontSize: 12,
  },
  mealName: {
    color: '#8C7B6B',
    fontSize: 12,
    flex: 1,
  },
  ingredientsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#B5694D',
    marginTop: 5,
    marginBottom: 3,
  },
  ingredientsList: {
    marginLeft: 15,
    fontSize: 11,
  },
  ingredientItem: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  bullet: {
    width: 10,
    fontSize: 14,
    color: '#B5694D',
  },
  footer: {
    marginTop: 20,
    fontSize: 9,
    color: '#8C7B6B',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

const ShoppingListPDF = ({ mealPlan }) => {
  const days = [
    { name: 'Måndag', key: 'monday' },
    { name: 'Tisdag', key: 'tuesday' },
    { name: 'Onsdag', key: 'wednesday' },
    { name: 'Torsdag', key: 'thursday' },
    { name: 'Fredag', key: 'friday' },
    { name: 'Lördag', key: 'saturday' },
    { name: 'Söndag', key: 'sunday' },
  ];

  return (
    <Document>
      <Page style={styles.page}>
        {/* Header with logo and date */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Min Veckomeny</Text>
            <Text style={styles.date}>
              Genererad: {new Date().toLocaleDateString('sv-SE')}
            </Text>
          </View>
          {/* Replace with your Base64 logo or image path */}
          <Image 
            style={styles.logo} 
            src="/path/to/your/logo.png" // or use Base64 string
          />
        </View>

        {/* Daily meal plan with ingredients */}
        {days.map((day) => {
          const dayMeals = mealPlan?.[day.key] || {};
          const hasMeals = Object.keys(dayMeals).length > 0;
          
          return (
            <View key={day.key} style={styles.daySection}>
              <Text style={styles.dayHeader}>{day.name}</Text>
              
              {hasMeals ? (
                <>
                  {Object.entries(dayMeals).map(([mealType, meal]) => (
                    <View key={mealType} style={styles.mealRow}>
                      <Text style={styles.mealName}>{meal.name}</Text>
                    </View>
                  ))}
                  
                  <Text style={styles.ingredientsTitle}>Ingredienser:</Text>
                  <View style={styles.ingredientsList}>
                    {Object.entries(dayMeals).map(([mealType, meal]) => (
                      
                      <View key={mealType} style={styles.ingredientItem}>
                        <Text style={styles.bullet}>•</Text>
                       <Text>{meal.ingredients.join(', ')}</Text>
                      </View>
                    )) || <Text style={{ fontStyle: 'italic' }}>Inga ingredienser</Text>}
                  </View>
                </>
              ) : (
                <Text style={{ fontStyle: 'italic' }}>Inga måltider planerade</Text>
              )}
            </View>
          );
        })}

        {/* Footer note */}
        <View style={styles.footer}>
          <Text>Genererad av Matplaneraren - En bra måltidsplan är hälften av matglädjen!</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ShoppingListPDF;
