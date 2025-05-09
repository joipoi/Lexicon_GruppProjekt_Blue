import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Styles for the PDF layout
const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontSize: 12,
  },
  section: {
    marginBottom: 12,
  },
  heading: {
    fontSize: 18,
    marginBottom: 6,
  },
  image: {
    width: '50%',
    height: 200,
    marginBottom: 12,
  },
});

const RecipePDF = ({ recipe }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>{recipe.name}</Text>
      </View>
      {recipe.image && (
        <Image style={styles.image} src={recipe.image} />
      )}
      <View style={styles.section}>
        <Text>Ingredients: {recipe.ingredients.join(', ')}</Text>
      </View>
      <View style={styles.section}>
        <Text>Instructions: {recipe.instructions.join('. ')}</Text>
      </View>
      <View style={styles.section}>
        <Text>
          Nutrition: Calories: {recipe.nutrition.Calories}, Protein: {recipe.nutrition.Protein}, Carbs: {recipe.nutrition.Carbs}, Fat: {recipe.nutrition.Fat}
        </Text>
      </View>
    </Page>
  </Document>
);

export default RecipePDF;
