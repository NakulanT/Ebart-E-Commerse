export const categorizeCards = (cards) => {
  const adCards = {};
  const itemCards = {};
  const categories = {
    Electronics: [],
    Appliance: [],
    Furniture: [],
    Clothing: [],
    Grocery: []
  };

  for (const key in cards) {
    if (cards.hasOwnProperty(key)) {
      const card = cards[key];
      if (card.cardType === 'Ad') {
        adCards[key] = card;
        const category = card.category;
        if (categories.hasOwnProperty(category)) {
          categories[category].push(card);
        }
      } else if (card.cardType === 'item') {
        itemCards[key] = card;
        const category = card.category;
        if (categories.hasOwnProperty(category)) {
          categories[category].push(card);
        }
      }
    }
  }

  return { adCards, itemCards, categories };
};
