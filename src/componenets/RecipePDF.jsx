import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#FFF8F0', // Light cream background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D4A55E', // Light brown accent
  },
  logoContainer: {
    width: 60,
  },
  logo: {
    width: 50,
    height: 40,
  },
  tagline: {
    fontSize: 10,
    color: '#8A9B7E', // Sage green
    fontStyle: 'italic',
    marginTop: 5,
  },
  recipeHeader: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D4A55E',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B5694D', // Terracotta
    marginBottom: 5,
  },
  metaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  metaItem: {
    fontSize: 12,
    color: '#3A3226', // Dark brown
  },
  image: {
    width: '50%',
    maxHeight: 200,
    marginBottom: 20,
    borderRadius: 4,
  },
  section: {
    marginBottom: 15,
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
  ingredientsList: {
    marginLeft: 10,
    fontSize:11
  },
  ingredientItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bullet: {
    width: 10,
    fontSize: 14,
    color: '#B5694D', // Terracotta
  },
  instructionsList: {
    marginLeft: 10,
     fontSize:11
  },
  instructionItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  stepNumber: {
    width: 20,
    height: 20,
    backgroundColor: '#8A9B7E', // Sage green
    color: 'white',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 12,
    marginRight: 8,
    paddingTop: 2,
  },
  nutritionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  nutritionItem: {
    width: '24%',
    textAlign: 'center',
    backgroundColor: '#F3E9DC', // Light cream
    padding: 5,
    borderRadius: 4,
  },
  nutritionValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#B5694D', // Terracotta
  },
  nutritionLabel: {
    fontSize: 10,
    color: '#8C7B6B', // Medium brown
  },
});

const RecipePDF = ({ recipe }) => (
  <Document>
    <Page style={styles.page}>
      {/* Header with logo and tagline */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo} 
           src={'Icon/logo_icon_sage.png'}
            alt="Fijoka Logo"
          />
          <Text style={styles.tagline}>En bra måltidsplan är hälften av matglädjen!</Text>
        </View>
        <Text style={{ fontSize: 10, color: '#8C7B6B' }}>
          {new Date().toLocaleDateString('sv-SE')}
        </Text>
      </View>

      {/* Recipe title and metadata */}
      <View style={styles.recipeHeader}>
        <Text style={styles.title}>{recipe.name}</Text>
        <View style={styles.metaInfo}>
          <Text style={styles.metaItem}>Tillagningstid: {recipe.cookTime} min</Text>
          <Text style={styles.metaItem}>Portioner: {recipe.servings || '4'}</Text>
          <Text style={styles.metaItem}>Kategori: {recipe.category || 'Middag'}</Text>
        </View>
      </View>

      {/* Recipe image */}
      {recipe.image && (
        <Image style={styles.image} src={recipe.image} />
      )}

      {/* Ingredients section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredienser</Text>
        <View style={styles.ingredientsList}>
          {recipe.ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientItem}>
              <Text style={styles.bullet}>•</Text>
              <Text>{ingredient}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Instructions section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tillagning</Text>
        <View style={styles.instructionsList}>
          {recipe.instructions.map((instruction, index) => (
            <View key={index} style={styles.instructionItem}>
              <Text style={styles.stepNumber}>{index + 1}</Text>
              <Text>{instruction}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Nutrition section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Näringsvärden</Text>
        <View style={styles.nutritionGrid}>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>{recipe.nutrition.Calories}</Text>
            <Text style={styles.nutritionLabel}>Kalorier</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>{recipe.nutrition.Protein}</Text>
            <Text style={styles.nutritionLabel}>Protein</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>{recipe.nutrition.Carbs}</Text>
            <Text style={styles.nutritionLabel}>Kolhydrater</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>{recipe.nutrition.Fat}</Text>
            <Text style={styles.nutritionLabel}>Fett</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default RecipePDF; 