
# CoinCard Component

This `CoinCard` component displays cryptocurrency details such as name, symbol, price, and favorite status. It is designed using React Native and can be integrated into your app's UI to render each coin in a card format.

## 📄 Component Usage

```tsx
import CoinCard from './components/CoinCard';

<CoinCard
  item={coin}
  isFavorite={favorites.includes(coin.id)}
  onPress={() => navigateToDetails(coin.id)}
  onLongPress={() => toggleFavorite(coin.id)}
/>
```

## 🔧 Props

| Prop         | Type     | Description                                              |
|--------------|----------|----------------------------------------------------------|
| `item`       | `object` | The coin data containing name, symbol, current_price, etc. |
| `isFavorite` | `boolean`| Indicates if the coin is marked as favorite             |
| `onPress`    | `func`   | Called when the card is pressed                         |
| `onLongPress`| `func`   | Called when the card is long-pressed (toggles favorite) |

## 💅 Styling

The background and styles adapt based on favorite status. The primary color for favorites is `#1e40af`, and the normal background color is `#1f2937`.

---

## ▶️ How to View in Expo Snack Online

1. Visit [https://snack.expo.dev](https://snack.expo.dev).
2. Create a new Snack or open an existing one.
3. Clone our repository by clicking the `...` icon in the top-right and select **Import Git Repository**.

   ![Import Git Repository Button](https://ik.imagekit.io/rggqxorgf/import-button.png?updatedAt=1744571431917)

4. Paste this GitHub repository link: `https://github.com/nchand271989/cryptotrackermobile.git` and press the **Import** button.
5. Remove any `index.ts` file if it exists to avoid conflicts with the app setup.

Now, you should be able to see and run the app on both iOS and Android online in Expo Snack!