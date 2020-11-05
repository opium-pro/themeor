import {ReactComponent as placeholder} from './icons/placeholder.svg'
import {ReactComponent as github} from './icons/github.svg'

export default {

  // This will be passed to ThemeContext.
  // If you want to use uour own context, start them with underscore
  "themeContext": {
    "shallInverseOn": ["base", "faint", "accent"],
    "darkMode": false
  },

  // Incert you oun variables to use them in "fill" prop like fill="--demo-var"
  // For more see http://themeor.opium.pro/colors
  "customVariables": {
    "demo-var": "#fc0"
  },

  // Simple set for fills
  // For more see http://themeor.opium.pro/colors
  "fill": {
    "base": {
      "strong": "#000",
      "weak": "#fff"
    },
    "faint": {
      "strong": "#8994A6",
      "weak": "#F6F8FB"
    },
    "accent": {
      "strong": "#1273F3",
      "weak": "#EBF4FF"
    }
  },

  // Gradients
  // For more see http://themeor.opium.pro/colors
  "fancy-fill": {
    "accent": {
      "strong": "linear-gradient(132deg, #3F89EE, #5447FF)"
    }
  },

  // Simple set for Box component
  // For more see http://themeor.opium.pro/box/config
  "box": {
    "radius": {
      "sm": "4px",
      "md": "12px",
      "lg": "16px"
    },
    "shadow": {
      "md": "0px 20px 40px rgba(59, 70, 128, 0.05)",
      "lg": "0px 20px 40px rgba(6, 7, 12, 0.10)"
    }
  },

  // Simple set for Font component
  // For more see http://themeor.opium.pro/font/config
  "font": {
    "family": {
      "regular": "'Helvetica', sans-serif"
    },
    "size": {
      "sm": "12px",
      "md": "16px",
      "lg": "24px"
    }
  },

  // Simple set for Icon component
  // For more see http://themeor.opium.pro/icon/config
  "icon": {
    "size": {
      "md": "24px"
    },

    // It's possible to use different icons for different sizes
    "set": {
      "md": {placeholder, github}
    }
  },

  // Simple set for Gap component
  // For more see http://themeor.opium.pro/gap/config
  "gap": {
    "sm": "8px",
    "md": "24px",
    "lg": "40px"
  },

  // Simple set for Effect component
  // For more see http://themeor.opium.pro/effect/config
  "effect": {
    "transparency": {
      "sm": "0.9",
      "md": "0.5",
      "lg": "0.1"
    }
  }
}