# TaxCanada

Calculateur de taxes canadien — TPS, TVQ, TVH, HST, PST pour toutes les provinces.

Développé par **3DNG**.

---

## Fonctionnalités

- Calcul standard (HT → TTC) et inverse (TTC → HT)
- 13 provinces et territoires
- Historique des 20 derniers calculs
- Copier le résultat
- Disponible en français, anglais et espagnol
- Mode clair et sombre
- 100% offline (app native)
- Aucune publicité, aucune collecte de données

## Stack technique

- HTML / CSS / JS vanilla
- [Capacitor](https://capacitorjs.com/) pour le build natif Android / iOS
- Stockage local via localStorage

## Build Android

### Prérequis

- Node.js
- Java 21
- Android Studio + SDK Android

### Commandes

```bash
# Sync les assets web vers Android
npm run sync

# Build APK debug
cd android && ./gradlew assembleDebug

# Build AAB release (Play Store)
env KEYSTORE_PASS=xxx ./gradlew bundleRelease
```

## Taux de taxes (2025)

| Province | Taxe 1 | Taxe 2 | Total |
|---|---|---|---|
| Québec | TPS 5% | TVQ 9.975% | 14.975% |
| Ontario | TVH 13% | — | 13% |
| Colombie-Britannique | TPS 5% | TVP 7% | 12% |
| Alberta | TPS 5% | — | 5% |
| Saskatchewan | TPS 5% | TVP 6% | 11% |
| Manitoba | TPS 5% | TVP 7% | 12% |
| Nouveau-Brunswick | TVH 15% | — | 15% |
| Nouvelle-Écosse | TVH 15% | — | 15% |
| Île-du-Prince-Édouard | TVH 15% | — | 15% |
| Terre-Neuve-et-Labrador | TVH 15% | — | 15% |
| Yukon | TPS 5% | — | 5% |
| Territoires du Nord-Ouest | TPS 5% | — | 5% |
| Nunavut | TPS 5% | — | 5% |

## Contact

kael.konstruct@gmail.com
