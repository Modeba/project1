import Image from "next/image";
import styles from "./page.module.css";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    image: "/next.svg",
    price: 49.99,
    description: "Comfortable over-ear headphones with noise cancellation.",
  },
  {
    id: 2,
    title: "Smart Watch",
    image: "/vercel.svg",
    price: 89.99,
    description: "Track your fitness and notifications on the go.",
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    image: "/next.svg",
    price: 29.99,
    description: "Portable speaker with rich, deep bass.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
              />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}