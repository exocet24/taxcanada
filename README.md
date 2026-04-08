# TaxCanada

Calculateur de taxes canadien — TPS, TVQ, TVH pour toutes les provinces.

## Fonctionnalités

- ✅ Calcul standard (HT → TTC)
- ✅ Calcul inverse (TTC → HT)  
- ✅ 13 provinces/territoires supportés
- ✅ Historique des 20 derniers calculs
- ✅ Copier le résultat
- ✅ 100% offline
- ✅ Aucune collecte de données
- ✅ PWA installable

## Taux de taxes (2025)

| Province | TPS/TVH | TVP/TVQ | Total |
|----------|---------|---------|-------|
| Québec | 5% | 9.975% | 14.975% |
| Ontario | 13% (TVH) | — | 13% |
| C.-B. | 5% | 7% | 12% |
| Alberta | 5% | — | 5% |
| Saskatchewan | 5% | 6% | 11% |
| Manitoba | 5% | 7% | 12% |
| N.-Brunswick | 15% (TVH) | — | 15% |
| N.-Écosse | 15% (TVH) | — | 15% |
| Î.-P.-É. | 15% (TVH) | — | 15% |
| T.-N.-L. | 15% (TVH) | — | 15% |
| Yukon | 5% | — | 5% |
| T.N.-O. | 5% | — | 5% |
| Nunavut | 5% | — | 5% |

## Publication sur Google Play Store

### 1. Compte développeur

1. Va sur [Google Play Console](https://play.google.com/console)
2. Crée un compte (25$ USD one-time)
3. Complète la vérification d'identité

### 2. Convertir en APK/AAB avec PWABuilder

1. Héberge l'app sur une URL HTTPS (ex: https://taxcanada.konstruct.ca)
2. Va sur [PWABuilder.com](https://pwabuilder.com)
3. Entre ton URL
4. Clique "Package for stores" → "Android"
5. Configure:
   - Package ID: `ca.konstruct.taxcanada`
   - App name: `TaxCanada`
   - Version: `1.0.0`
6. Télécharge le fichier AAB

### 3. Préparer les assets Play Store

**Screenshots requis:**
- Minimum 2 screenshots
- Format: JPEG ou PNG 24-bit
- Dimensions: min 320px, max 3840px
- Ratio: entre 16:9 et 9:16

**Textes:**
- Titre: TaxCanada - Calculateur de taxes (max 30 car.)
- Description courte: Calcul TPS/TVQ/TVH pour toutes les provinces canadiennes (max 80 car.)
- Description complète: voir ci-dessous

**Description complète suggérée:**
```
TaxCanada — le calculateur de taxes le plus simple pour le Canada.

✓ Calcul instantané TPS, TVQ, TVH
✓ Toutes les provinces et territoires
✓ Mode inverse: retrouvez le prix avant taxes
✓ Historique de vos calculs
✓ Fonctionne hors ligne
✓ Aucune publicité
✓ Aucune collecte de données

Parfait pour:
• Vérifier vos factures
• Calculer rapidement les taxes sur un achat
• Retrouver le prix HT à partir du total

Simple. Rapide. Privé.

Développé au Québec 🍁
```

### 4. Soumettre l'app

1. Crée une nouvelle application dans Play Console
2. Remplis les informations de base
3. Upload le fichier AAB
4. Ajoute les screenshots
5. Configure la politique de confidentialité (URL vers privacy.html)
6. Soumets pour review (1-3 jours)

## Structure des fichiers

```
taxcanada/
├── index.html          # App principale
├── privacy.html        # Politique de confidentialité
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
├── icon.svg           # Icône vectorielle
├── icon-192.png       # Icône 192x192
├── icon-512.png       # Icône 512x512
├── icon-maskable-192.png  # Icône maskable 192x192
├── icon-maskable-512.png  # Icône maskable 512x512
└── README.md          # Ce fichier
```

## Hébergement

Pour PWABuilder, l'app doit être hébergée en HTTPS. Options:

1. **GitHub Pages** (gratuit)
2. **Cloudflare Pages** (gratuit)
3. **Ton serveur** avec Let's Encrypt

### Exemple Nginx

```nginx
server {
    listen 443 ssl http2;
    server_name taxcanada.konstruct.ca;
    
    ssl_certificate /etc/letsencrypt/live/taxcanada.konstruct.ca/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/taxcanada.konstruct.ca/privkey.pem;
    
    root /var/www/taxcanada;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(png|jpg|jpeg|gif|ico|svg|js|css)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

## Licence

© 2025 Konstruct / Atelier. Tous droits réservés.
