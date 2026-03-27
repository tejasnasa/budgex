import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { ArrowRight, PieChart, Target, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="Budgex" height={48} width={48} className={styles.logo} />
          <span className={styles.brandName}>Budgex</span>
        </div>
        <nav className={styles.nav}>
          <Link href="/login" className={styles.login}>Login</Link>
          <Link href="/signup" className={styles.signup}>Sign Up</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>✨ The Smart Way to Save</div>
          <h1 className={styles.heading}>
            Master Your Money with <span className={styles.highlight}>Budgex</span>
          </h1>
          <p className={styles.subheading}>
            The ultimate personal financial tracker. Monitor your expenses, hit your savings goals, and understand your spending habits—all in one place.
          </p>
          <div className={styles.heroActions}>
            <Link href="/signup" className={styles.primaryCta}>
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.glassCard}>
            <div className={styles.cardHeader}>
              <div className={styles.circles}>
                <span className={styles.redCircle}></span>
                <span className={styles.yellowCircle}></span>
                <span className={styles.greenCircle}></span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.mockItem}>
                <div className={styles.mockIcon}><PieChart size={24} /></div>
                <div className={styles.mockDetails}>
                  <div className={styles.mockTitle}>Groceries</div>
                  <div className={styles.mockDate}>Today</div>
                </div>
                <div className={styles.mockAmount}>-$45.00</div>
              </div>
              <div className={styles.mockItem}>
                <div className={styles.mockIcon}><Zap size={24} /></div>
                <div className={styles.mockDetails}>
                  <div className={styles.mockTitle}>Electricity</div>
                  <div className={styles.mockDate}>Yesterday</div>
                </div>
                <div className={styles.mockAmount}>-$120.50</div>
              </div>
              <div className={styles.mockItem}>
                <div className={styles.mockIcon}><Target size={24} /></div>
                <div className={styles.mockDetails}>
                  <div className={styles.mockTitle}>Vacation Fund</div>
                  <div className={styles.mockDate}>Goal Progress</div>
                </div>
                <div className={styles.mockAmountPositive}>+$500.00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Why Choose Budgex?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <PieChart size={32} />
            </div>
            <h3>Track Everything</h3>
            <p>Easily log and categorize your daily expenses to see exactly where your money goes.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <Target size={32} />
            </div>
            <h3>Set Savings Goals</h3>
            <p>Create custom savings targets and monitor your progress as you build your wealth.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <Zap size={32} />
            </div>
            <h3>Fast & Intuitive</h3>
            <p>A beautifully simple, distraction-free interface designed to help you focus on your finances.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
