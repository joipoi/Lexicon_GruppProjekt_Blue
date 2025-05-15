import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#FFF8F0', // Light cream background
  },
   ingredientsList: {
    marginLeft: 10,
    fontSize:11
  },
  ingredientItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8A9B7E', // Sage green
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F3E9DC', // Light cream
    paddingBottom: 3,
  },
   bullet: {
    width: 10,
    fontSize: 14,
    color: '#B5694D', // Terracotta
  },
});

const ShoppingListPDF = ({ ingredients }) => (
  <Document>
    <Page style={styles.page}>

      {/* Ingredients section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Inköpslista</Text>
        <View style={styles.ingredientsList}>
          {ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientItem}>
              <Text style={styles.bullet}>•</Text>
              <Text>{ingredient}</Text>
            </View>
          ))}
        </View>
      </View>


    
    </Page>
  </Document>
);

export default ShoppingListPDF; 