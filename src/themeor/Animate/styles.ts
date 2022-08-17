import { createStyleSheet, getClasses } from '../utils/styles.js'
import { Classes, Styles } from 'jss'
import { ANIMATE_NAME } from './types.js'

export const useCss: () => Classes = () => getClasses(ANIMATE_NAME)

export default function (normalizedConfig?: any) {
  const styles: Styles = {
    "@global": {
      ":root": {
        "--t-animate-duration": "1s",
        "--t-animate-delay": "0",
        "--t-animate-repeat": "1"
      },
      ".animated": {
        "-webkit-animation-duration": "var(--t-animate-duration)",
        "animationDuration": "var(--t-animate-duration)",
        "-webkit-animation-fill-mode": "both",
        "animationFillMode": "both"
      },
      ".animated.infinite": {
        "-webkit-animation-iteration-count": "infinite",
        "animationIterationCount": "infinite"
      },
      ".animated.repeat-1": {
        "-webkit-animation-iteration-count": "var(--t-animate-repeat)",
        "animationIterationCount": "var(--t-animate-repeat)"
      },
      ".animated.repeat-2": {
        "-webkit-animation-iteration-count": "calc(var(--t-animate-repeat) * 2)",
        "animationIterationCount": "calc(var(--t-animate-repeat) * 2)",
      },
      ".animated.repeat-3": {
        "-webkit-animation-iteration-count": "calc(var(--t-animate-repeat) * 3)",
        "animationIterationCount": "calc(var(--t-animate-repeat) * 3)",
      },
      ".animated.delay-1s": {
        "-webkit-animation-delay": "var(--t-animate-delay)",
        "animationDelay": "var(--t-animate-delay)",
      },
      ".animated.delay-2s": {
        "-webkit-animation-delay": "calc(var(--t-animate-delay) * 2)",
        "animationDelay": "calc(var(--t-animate-delay) * 2)",
      },
      ".animated.delay-3s": {
        "-webkit-animation-delay": "calc(var(--t-animate-delay) * 3)",
        "animationDelay": "calc(var(--t-animate-delay) * 3)",
      },
      ".animated.delay-4s": {
        "-webkit-animation-delay": "calc(var(--t-animate-delay) * 4)",
        "animationDelay": "calc(var(--t-animate-delay) * 4)",
      },
      ".animated.delay-5s": {
        "-webkit-animation-delay": "calc(var(--t-animate-delay) * 5)",
        "animationDelay": "calc(var(--t-animate-delay) * 5)",
      },
      ".animated.faster": {
        "-webkit-animation-duration": "calc(var(--t-animate-duration) / 2)",
        "animationDuration": "calc(var(--t-animate-duration) / 2)",
      },
      ".animated.fast": {
        "-webkit-animation-duration": "calc(var(--t-animate-duration) * 0.8)",
        "animationDuration": "calc(var(--t-animate-duration) * 0.8)",
      },
      ".animated.slow": {
        "-webkit-animation-duration": "calc(var(--t-animate-duration) * 2)",
        "animationDuration": "calc(var(--t-animate-duration) * 2)",
      },
      ".animated.slower": {
        "-webkit-animation-duration": "calc(var(--t-animate-duration) * 3)",
        "animationDuration": "calc(var(--t-animate-duration) * 3)",
      },
      "@media print, (prefers-reduced-motion: reduce)": {
        ".animated": {
          "-webkit-animation-duration": "1ms !important",
          "animationDuration": "1ms !important",
          "-webkit-transition-duration": "1ms !important",
          "transitionDuration": "1ms !important",
          "-webkit-animation-iteration-count": "1 !important",
          "animationIterationCount": "1 !important"
        },
        ".animated[class*='Out']": {
          "opacity": "0"
        }
      },
      "@keyframes bounce": {
        "from, 20%, 53%, to": {
          "-webkit-animation-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
          "animationTimingFunction": "cubic-bezier(0.215, 0.61, 0.355, 1)",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        },
        "40%, 43%": {
          "-webkit-animation-timing-function": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
          "animationTimingFunction": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
          "-webkit-transform": "translate3d(0, -30px, 0) scaleY(1.1)",
          "transform": "translate3d(0, -30px, 0) scaleY(1.1)"
        },
        "70%": {
          "-webkit-animation-timing-function": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
          "animationTimingFunction": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
          "-webkit-transform": "translate3d(0, -15px, 0) scaleY(1.05)",
          "transform": "translate3d(0, -15px, 0) scaleY(1.05)"
        },
        "80%": {
          "-webkit-transition-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
          "transitionTimingFunction": "cubic-bezier(0.215, 0.61, 0.355, 1)",
          "-webkit-transform": "translate3d(0, 0, 0) scaleY(0.95)",
          "transform": "translate3d(0, 0, 0) scaleY(0.95)"
        },
        "90%": {
          "-webkit-transform": "translate3d(0, -4px, 0) scaleY(1.02)",
          "transform": "translate3d(0, -4px, 0) scaleY(1.02)"
        }
      },
      ".bounce": {
        "-webkit-animation-name": "bounce",
        "animationName": "bounce",
        "-webkit-transform-origin": "center bottom",
        "transformOrigin": "center bottom"
      },
      "@keyframes flash": {
        "from, 50%, to": {
          "opacity": "1"
        },
        "25%, 75%": {
          "opacity": "0"
        }
      },
      ".flash": {
        "-webkit-animation-name": "flash",
        "animationName": "flash"
      },
      "@keyframes pulse": {
        "from": {
          "-webkit-transform": "scale3d(1, 1, 1)",
          "transform": "scale3d(1, 1, 1)"
        },
        "50%": {
          "-webkit-transform": "scale3d(1.05, 1.05, 1.05)",
          "transform": "scale3d(1.05, 1.05, 1.05)"
        },
        "to": {
          "-webkit-transform": "scale3d(1, 1, 1)",
          "transform": "scale3d(1, 1, 1)"
        }
      },
      ".pulse": {
        "-webkit-animation-name": "pulse",
        "animationName": "pulse",
        "-webkit-animation-timing-function": "ease-in-out",
        "animationTimingFunction": "ease-in-out"
      },
      "@keyframes rubberBand": {
        "from": {
          "-webkit-transform": "scale3d(1, 1, 1)",
          "transform": "scale3d(1, 1, 1)"
        },
        "30%": {
          "-webkit-transform": "scale3d(1.25, 0.75, 1)",
          "transform": "scale3d(1.25, 0.75, 1)"
        },
        "40%": {
          "-webkit-transform": "scale3d(0.75, 1.25, 1)",
          "transform": "scale3d(0.75, 1.25, 1)"
        },
        "50%": {
          "-webkit-transform": "scale3d(1.15, 0.85, 1)",
          "transform": "scale3d(1.15, 0.85, 1)"
        },
        "65%": {
          "-webkit-transform": "scale3d(0.95, 1.05, 1)",
          "transform": "scale3d(0.95, 1.05, 1)"
        },
        "75%": {
          "-webkit-transform": "scale3d(1.05, 0.95, 1)",
          "transform": "scale3d(1.05, 0.95, 1)"
        },
        "to": {
          "-webkit-transform": "scale3d(1, 1, 1)",
          "transform": "scale3d(1, 1, 1)"
        }
      },
      ".rubberBand": {
        "-webkit-animation-name": "rubberBand",
        "animationName": "rubberBand"
      },
      "@keyframes shakeX": {
        "from, to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        },
        "10%, 30%, 50%, 70%, 90%": {
          "-webkit-transform": "translate3d(-10px, 0, 0)",
          "transform": "translate3d(-10px, 0, 0)"
        },
        "20%, 40%, 60%, 80%": {
          "-webkit-transform": "translate3d(10px, 0, 0)",
          "transform": "translate3d(10px, 0, 0)"
        }
      },
      ".shakeX": {
        "-webkit-animation-name": "shakeX",
        "animationName": "shakeX"
      },
      "@keyframes shakeY": {
        "from, to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        },
        "10%, 30%, 50%, 70%, 90%": {
          "-webkit-transform": "translate3d(0, -10px, 0)",
          "transform": "translate3d(0, -10px, 0)"
        },
        "20%, 40%, 60%, 80%": {
          "-webkit-transform": "translate3d(0, 10px, 0)",
          "transform": "translate3d(0, 10px, 0)"
        }
      },
      ".shakeY": {
        "-webkit-animation-name": "shakeY",
        "animationName": "shakeY"
      },
      "@keyframes headShake": {
        "0%": {
          "-webkit-transform": "translateX(0)",
          "transform": "translateX(0)"
        },
        "6.5%": {
          "-webkit-transform": "translateX(-6px) rotateY(-9deg)",
          "transform": "translateX(-6px) rotateY(-9deg)"
        },
        "18.5%": {
          "-webkit-transform": "translateX(5px) rotateY(7deg)",
          "transform": "translateX(5px) rotateY(7deg)"
        },
        "31.5%": {
          "-webkit-transform": "translateX(-3px) rotateY(-5deg)",
          "transform": "translateX(-3px) rotateY(-5deg)"
        },
        "43.5%": {
          "-webkit-transform": "translateX(2px) rotateY(3deg)",
          "transform": "translateX(2px) rotateY(3deg)"
        },
        "50%": {
          "-webkit-transform": "translateX(0)",
          "transform": "translateX(0)"
        }
      },
      ".headShake": {
        "-webkit-animation-timing-function": "ease-in-out",
        "animationTimingFunction": "ease-in-out",
        "-webkit-animation-name": "headShake",
        "animationName": "headShake"
      },
      "@keyframes swing": {
        "20%": {
          "-webkit-transform": "rotate3d(0, 0, 1, 15deg)",
          "transform": "rotate3d(0, 0, 1, 15deg)"
        },
        "40%": {
          "-webkit-transform": "rotate3d(0, 0, 1, -10deg)",
          "transform": "rotate3d(0, 0, 1, -10deg)"
        },
        "60%": {
          "-webkit-transform": "rotate3d(0, 0, 1, 5deg)",
          "transform": "rotate3d(0, 0, 1, 5deg)"
        },
        "80%": {
          "-webkit-transform": "rotate3d(0, 0, 1, -5deg)",
          "transform": "rotate3d(0, 0, 1, -5deg)"
        },
        "to": {
          "-webkit-transform": "rotate3d(0, 0, 1, 0deg)",
          "transform": "rotate3d(0, 0, 1, 0deg)"
        }
      },
      ".swing": {
        "-webkit-transform-origin": "top center",
        "transformOrigin": "top center",
        "-webkit-animation-name": "swing",
        "animationName": "swing"
      },
      "@keyframes tada": {
        "from": {
          "-webkit-transform": "scale3d(1, 1, 1)",
          "transform": "scale3d(1, 1, 1)"
        },
        "10%, 20%": {
          "-webkit-transform": "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          "transform": "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"
        },
        "30%, 50%, 70%, 90%": {
          "-webkit-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
        },
        "40%, 60%, 80%": {
          "-webkit-transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          "transform": "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
        },
        "to": {
          "-webkit-transform": "scale3d(1, 1, 1)",
          "transform": "scale3d(1, 1, 1)"
        }
      },
      ".tada": {
        "-webkit-animation-name": "tada",
        "animationName": "tada"
      },
      "@keyframes wobble": {
        "from": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        },
        "15%": {
          "-webkit-transform": "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",
          "transform": "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"
        },
        "30%": {
          "-webkit-transform": "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
          "transform": "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"
        },
        "45%": {
          "-webkit-transform": "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",
          "transform": "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"
        },
        "60%": {
          "-webkit-transform": "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",
          "transform": "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"
        },
        "75%": {
          "-webkit-transform": "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
          "transform": "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".wobble": {
        "-webkit-animation-name": "wobble",
        "animationName": "wobble"
      },
      "@keyframes jello": {
        "from, 11.1%, to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        },
        "22.2%": {
          "-webkit-transform": "skewX(-12.5deg) skewY(-12.5deg)",
          "transform": "skewX(-12.5deg) skewY(-12.5deg)"
        },
        "33.3%": {
          "-webkit-transform": "skewX(6.25deg) skewY(6.25deg)",
          "transform": "skewX(6.25deg) skewY(6.25deg)"
        },
        "44.4%": {
          "-webkit-transform": "skewX(-3.125deg) skewY(-3.125deg)",
          "transform": "skewX(-3.125deg) skewY(-3.125deg)"
        },
        "55.5%": {
          "-webkit-transform": "skewX(1.5625deg) skewY(1.5625deg)",
          "transform": "skewX(1.5625deg) skewY(1.5625deg)"
        },
        "66.6%": {
          "-webkit-transform": "skewX(-0.78125deg) skewY(-0.78125deg)",
          "transform": "skewX(-0.78125deg) skewY(-0.78125deg)"
        },
        "77.7%": {
          "-webkit-transform": "skewX(0.390625deg) skewY(0.390625deg)",
          "transform": "skewX(0.390625deg) skewY(0.390625deg)"
        },
        "88.8%": {
          "-webkit-transform": "skewX(-0.1953125deg) skewY(-0.1953125deg)",
          "transform": "skewX(-0.1953125deg) skewY(-0.1953125deg)"
        }
      },
      ".jello": {
        "-webkit-animation-name": "jello",
        "animationName": "jello",
        "-webkit-transform-origin": "center",
        "transformOrigin": "center"
      },
      "@keyframes heartBeat": {
        "0%": {
          "-webkit-transform": "scale(1)",
          "transform": "scale(1)"
        },
        "14%": {
          "-webkit-transform": "scale(1.3)",
          "transform": "scale(1.3)"
        },
        "28%": {
          "-webkit-transform": "scale(1)",
          "transform": "scale(1)"
        },
        "42%": {
          "-webkit-transform": "scale(1.3)",
          "transform": "scale(1.3)"
        },
        "70%": {
          "-webkit-transform": "scale(1)",
          "transform": "scale(1)"
        }
      },
      ".heartBeat": {
        "-webkit-animation-name": "heartBeat",
        "animationName": "heartBeat",
        "-webkit-animation-duration": "calc(var(--t-animate-duration) * 1.3)",
        "animationDuration": "calc(var(--t-animate-duration) * 1.3)",
        "-webkit-animation-timing-function": "ease-in-out",
        "animationTimingFunction": "ease-in-out"
      },
      "@keyframes backInDown": {
        "0%": {
          "-webkit-transform": "translateY(-1200px) scale(0.7)",
          "transform": "translateY(-1200px) scale(0.7)",
          "opacity": "0.7"
        },
        "80%": {
          "-webkit-transform": "translateY(0px) scale(0.7)",
          "transform": "translateY(0px) scale(0.7)",
          "opacity": "0.7"
        },
        "100%": {
          "-webkit-transform": "scale(1)",
          "transform": "scale(1)",
          "opacity": "1"
        }
      },
      ".backInDown": {
        "-webkit-animation-name": "backInDown",
        "animationName": "backInDown"
      },
      "@keyframes backInLeft": {
        "0%": {
          "-webkit-transform": "translateX(-2000px) scale(0.7)",
          "transform": "translateX(-2000px) scale(0.7)",
          "opacity": "0.7"
        },
        "80%": {
          "-webkit-transform": "translateX(0px) scale(0.7)",
          "transform": "translateX(0px) scale(0.7)",
          "opacity": "0.7"
        },
        "100%": {
          "-webkit-transform": "scale(1)",
          "transform": "scale(1)",
          "opacity": "1"
        }
      },
      ".backInLeft": {
        "-webkit-animation-name": "backInLeft",
        "animationName": "backInLeft"
      },
      "@keyframes backInRight": {
        "0%": {
          "-webkit-transform": "translateX(2000px) scale(0.7)",
          "transform": "translateX(2000px) scale(0.7)",
          "opacity": "0.7"
        },
        "80%": {
          "-webkit-transform": "translateX(0px) scale(0.7)",
          "transform": "translateX(0px) scale(0.7)",
          "opacity": "0.7"
        },
        "100%": {
          "-webkit-transform": "scale(1)",
          "transform": "scale(1)",
          "opacity": "1"
        }
      },
      ".backInRight": {
        "-webkit-animation-name": "backInRight",
        "animationName": "backInRight"
      },
      "@keyframes backInUp": {
        "0%": {
          "-webkit-transform": "translateY(1200px) scale(0.7)",
          "transform": "translateY(1200px) scale(0.7)",
          "opacity": "0.7"
        },
        "80%": {
          "-webkit-transform": "translateY(0px) scale(0.7)",
          "transform": "translateY(0px) scale(0.7)",
          "opacity": "0.7"
        },
        "100%": {
          "-webkit-transform": "scale(1)",
          "transform": "scale(1)",
          "opacity": "1"
        }
      },
      ".backInUp": {
        "-webkit-animation-name": "backInUp",
        "animationName": "backInUp"
      },
      "@keyframes backOutDown": {
        "0%": {
          "-webkit-transform": "scale(1)",
          "transform": "scale(1)",
          "opacity": "1"
        },
        "20%": {
          "-webkit-transform": "translateY(0px) scale(0.7)",
          "transform": "translateY(0px) scale(0.7)",
          "opacity": "0.7"
        },
        "100%": {
          "-webkit-transform": "translateY(700px) scale(0.7)",
          "transform": "translateY(700px) scale(0.7)",
          "opacity": "0.7"
        }
      },
      ".backOutDown": {
        "-webkit-animation-name": "backOutDown",
        "animationName": "backOutDown"
      },
      "@keyframes backOutLeft": {
        "0%": {
          "-webkit-transform": "scale(1)",
          "transform": "scale(1)",
          "opacity": "1"
        },
        "20%": {
          "-webkit-transform": "translateX(0px) scale(0.7)",
          "transform": "translateX(0px) scale(0.7)",
          "opacity": "0.7"
        },
        "100%": {
          "-webkit-transform": "translateX(-2000px) scale(0.7)",
          "transform": "translateX(-2000px) scale(0.7)",
          "opacity": "0.7"
        }
      },
      ".backOutLeft": {
        "-webkit-animation-name": "backOutLeft",
        "animationName": "backOutLeft"
      },
      "@keyframes backOutRight": {
        "0%": {
          "-webkit-transform": "scale(1)",
          "transform": "scale(1)",
          "opacity": "1"
        },
        "20%": {
          "-webkit-transform": "translateX(0px) scale(0.7)",
          "transform": "translateX(0px) scale(0.7)",
          "opacity": "0.7"
        },
        "100%": {
          "-webkit-transform": "translateX(2000px) scale(0.7)",
          "transform": "translateX(2000px) scale(0.7)",
          "opacity": "0.7"
        }
      },
      ".backOutRight": {
        "-webkit-animation-name": "backOutRight",
        "animationName": "backOutRight"
      },
      "@keyframes backOutUp": {
        "0%": {
          "-webkit-transform": "scale(1)",
          "transform": "scale(1)",
          "opacity": "1"
        },
        "20%": {
          "-webkit-transform": "translateY(0px) scale(0.7)",
          "transform": "translateY(0px) scale(0.7)",
          "opacity": "0.7"
        },
        "100%": {
          "-webkit-transform": "translateY(-700px) scale(0.7)",
          "transform": "translateY(-700px) scale(0.7)",
          "opacity": "0.7"
        }
      },
      ".backOutUp": {
        "-webkit-animation-name": "backOutUp",
        "animationName": "backOutUp"
      },
      "@keyframes bounceIn": {
        "from, 20%, 40%, 60%, 80%, to": {
          "-webkit-animation-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
          "animationTimingFunction": "cubic-bezier(0.215, 0.61, 0.355, 1)"
        },
        "0%": {
          "opacity": "0",
          "-webkit-transform": "scale3d(0.3, 0.3, 0.3)",
          "transform": "scale3d(0.3, 0.3, 0.3)"
        },
        "20%": {
          "-webkit-transform": "scale3d(1.1, 1.1, 1.1)",
          "transform": "scale3d(1.1, 1.1, 1.1)"
        },
        "40%": {
          "-webkit-transform": "scale3d(0.9, 0.9, 0.9)",
          "transform": "scale3d(0.9, 0.9, 0.9)"
        },
        "60%": {
          "opacity": "1",
          "-webkit-transform": "scale3d(1.03, 1.03, 1.03)",
          "transform": "scale3d(1.03, 1.03, 1.03)"
        },
        "80%": {
          "-webkit-transform": "scale3d(0.97, 0.97, 0.97)",
          "transform": "scale3d(0.97, 0.97, 0.97)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "scale3d(1, 1, 1)",
          "transform": "scale3d(1, 1, 1)"
        }
      },
      ".bounceIn": {
        "-webkit-animation-duration": "calc(var(--t-animate-duration) * 0.75)",
        "animationDuration": "calc(var(--t-animate-duration) * 0.75)",
        "-webkit-animation-name": "bounceIn",
        "animationName": "bounceIn"
      },
      "@keyframes bounceInDown": {
        "from, 60%, 75%, 90%, to": {
          "-webkit-animation-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
          "animationTimingFunction": "cubic-bezier(0.215, 0.61, 0.355, 1)"
        },
        "0%": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, -3000px, 0) scaleY(3)",
          "transform": "translate3d(0, -3000px, 0) scaleY(3)"
        },
        "60%": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 25px, 0) scaleY(0.9)",
          "transform": "translate3d(0, 25px, 0) scaleY(0.9)"
        },
        "75%": {
          "-webkit-transform": "translate3d(0, -10px, 0) scaleY(0.95)",
          "transform": "translate3d(0, -10px, 0) scaleY(0.95)"
        },
        "90%": {
          "-webkit-transform": "translate3d(0, 5px, 0) scaleY(0.985)",
          "transform": "translate3d(0, 5px, 0) scaleY(0.985)"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".bounceInDown": {
        "-webkit-animation-name": "bounceInDown",
        "animationName": "bounceInDown"
      },
      "@keyframes bounceInLeft": {
        "from, 60%, 75%, 90%, to": {
          "-webkit-animation-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
          "animationTimingFunction": "cubic-bezier(0.215, 0.61, 0.355, 1)"
        },
        "0%": {
          "opacity": "0",
          "-webkit-transform": "translate3d(-3000px, 0, 0) scaleX(3)",
          "transform": "translate3d(-3000px, 0, 0) scaleX(3)"
        },
        "60%": {
          "opacity": "1",
          "-webkit-transform": "translate3d(25px, 0, 0) scaleX(1)",
          "transform": "translate3d(25px, 0, 0) scaleX(1)"
        },
        "75%": {
          "-webkit-transform": "translate3d(-10px, 0, 0) scaleX(0.98)",
          "transform": "translate3d(-10px, 0, 0) scaleX(0.98)"
        },
        "90%": {
          "-webkit-transform": "translate3d(5px, 0, 0) scaleX(0.995)",
          "transform": "translate3d(5px, 0, 0) scaleX(0.995)"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".bounceInLeft": {
        "-webkit-animation-name": "bounceInLeft",
        "animationName": "bounceInLeft"
      },
      "@keyframes bounceInRight": {
        "from, 60%, 75%, 90%, to": {
          "-webkit-animation-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
          "animationTimingFunction": "cubic-bezier(0.215, 0.61, 0.355, 1)"
        },
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(3000px, 0, 0) scaleX(3)",
          "transform": "translate3d(3000px, 0, 0) scaleX(3)"
        },
        "60%": {
          "opacity": "1",
          "-webkit-transform": "translate3d(-25px, 0, 0) scaleX(1)",
          "transform": "translate3d(-25px, 0, 0) scaleX(1)"
        },
        "75%": {
          "-webkit-transform": "translate3d(10px, 0, 0) scaleX(0.98)",
          "transform": "translate3d(10px, 0, 0) scaleX(0.98)"
        },
        "90%": {
          "-webkit-transform": "translate3d(-5px, 0, 0) scaleX(0.995)",
          "transform": "translate3d(-5px, 0, 0) scaleX(0.995)"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".bounceInRight": {
        "-webkit-animation-name": "bounceInRight",
        "animationName": "bounceInRight"
      },
      "@keyframes bounceInUp": {
        "from, 60%, 75%, 90%, to": {
          "-webkit-animation-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
          "animationTimingFunction": "cubic-bezier(0.215, 0.61, 0.355, 1)"
        },
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, 3000px, 0) scaleY(5)",
          "transform": "translate3d(0, 3000px, 0) scaleY(5)"
        },
        "60%": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, -20px, 0) scaleY(0.9)",
          "transform": "translate3d(0, -20px, 0) scaleY(0.9)"
        },
        "75%": {
          "-webkit-transform": "translate3d(0, 10px, 0) scaleY(0.95)",
          "transform": "translate3d(0, 10px, 0) scaleY(0.95)"
        },
        "90%": {
          "-webkit-transform": "translate3d(0, -5px, 0) scaleY(0.985)",
          "transform": "translate3d(0, -5px, 0) scaleY(0.985)"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".bounceInUp": {
        "-webkit-animation-name": "bounceInUp",
        "animationName": "bounceInUp"
      },
      "@keyframes bounceOut": {
        "20%": {
          "-webkit-transform": "scale3d(0.9, 0.9, 0.9)",
          "transform": "scale3d(0.9, 0.9, 0.9)"
        },
        "50%, 55%": {
          "opacity": "1",
          "-webkit-transform": "scale3d(1.1, 1.1, 1.1)",
          "transform": "scale3d(1.1, 1.1, 1.1)"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "scale3d(0.3, 0.3, 0.3)",
          "transform": "scale3d(0.3, 0.3, 0.3)"
        }
      },
      ".bounceOut": {
        "-webkit-animation-duration": "calc(var(--t-animate-duration) * 0.75)",
        "animationDuration": "calc(var(--t-animate-duration) * 0.75)",
        "-webkit-animation-name": "bounceOut",
        "animationName": "bounceOut"
      },
      "@keyframes bounceOutDown": {
        "20%": {
          "-webkit-transform": "translate3d(0, 10px, 0) scaleY(0.985)",
          "transform": "translate3d(0, 10px, 0) scaleY(0.985)"
        },
        "40%, 45%": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, -20px, 0) scaleY(0.9)",
          "transform": "translate3d(0, -20px, 0) scaleY(0.9)"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, 2000px, 0) scaleY(3)",
          "transform": "translate3d(0, 2000px, 0) scaleY(3)"
        }
      },
      ".bounceOutDown": {
        "-webkit-animation-name": "bounceOutDown",
        "animationName": "bounceOutDown"
      },
      "@keyframes bounceOutLeft": {
        "20%": {
          "opacity": "1",
          "-webkit-transform": "translate3d(20px, 0, 0) scaleX(0.9)",
          "transform": "translate3d(20px, 0, 0) scaleX(0.9)"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(-2000px, 0, 0) scaleX(2)",
          "transform": "translate3d(-2000px, 0, 0) scaleX(2)"
        }
      },
      ".bounceOutLeft": {
        "-webkit-animation-name": "bounceOutLeft",
        "animationName": "bounceOutLeft"
      },
      "@keyframes bounceOutRight": {
        "20%": {
          "opacity": "1",
          "-webkit-transform": "translate3d(-20px, 0, 0) scaleX(0.9)",
          "transform": "translate3d(-20px, 0, 0) scaleX(0.9)"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(2000px, 0, 0) scaleX(2)",
          "transform": "translate3d(2000px, 0, 0) scaleX(2)"
        }
      },
      ".bounceOutRight": {
        "-webkit-animation-name": "bounceOutRight",
        "animationName": "bounceOutRight"
      },
      "@keyframes bounceOutUp": {
        "20%": {
          "-webkit-transform": "translate3d(0, -10px, 0) scaleY(0.985)",
          "transform": "translate3d(0, -10px, 0) scaleY(0.985)"
        },
        "40%, 45%": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 20px, 0) scaleY(0.9)",
          "transform": "translate3d(0, 20px, 0) scaleY(0.9)"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, -2000px, 0) scaleY(3)",
          "transform": "translate3d(0, -2000px, 0) scaleY(3)"
        }
      },
      ".bounceOutUp": {
        "-webkit-animation-name": "bounceOutUp",
        "animationName": "bounceOutUp"
      },
      "@keyframes fadeIn": {
        "from": {
          "opacity": "0"
        },
        "to": {
          "opacity": "1"
        }
      },
      ".fadeIn": {
        "-webkit-animation-name": "fadeIn",
        "animationName": "fadeIn"
      },
      "@keyframes fadeInDown": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, -100%, 0)",
          "transform": "translate3d(0, -100%, 0)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".fadeInDown": {
        "-webkit-animation-name": "fadeInDown",
        "animationName": "fadeInDown"
      },
      "@keyframes fadeInDownBig": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, -2000px, 0)",
          "transform": "translate3d(0, -2000px, 0)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".fadeInDownBig": {
        "-webkit-animation-name": "fadeInDownBig",
        "animationName": "fadeInDownBig"
      },
      "@keyframes fadeInLeft": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(-100%, 0, 0)",
          "transform": "translate3d(-100%, 0, 0)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".fadeInLeft": {
        "-webkit-animation-name": "fadeInLeft",
        "animationName": "fadeInLeft"
      },
      "@keyframes fadeInLeftBig": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(-2000px, 0, 0)",
          "transform": "translate3d(-2000px, 0, 0)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".fadeInLeftBig": {
        "-webkit-animation-name": "fadeInLeftBig",
        "animationName": "fadeInLeftBig"
      },
      "@keyframes fadeInRight": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(100%, 0, 0)",
          "transform": "translate3d(100%, 0, 0)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".fadeInRight": {
        "-webkit-animation-name": "fadeInRight",
        "animationName": "fadeInRight"
      },
      "@keyframes fadeInRightBig": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(2000px, 0, 0)",
          "transform": "translate3d(2000px, 0, 0)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".fadeInRightBig": {
        "-webkit-animation-name": "fadeInRightBig",
        "animationName": "fadeInRightBig"
      },
      "@keyframes fadeInUp": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, 100%, 0)",
          "transform": "translate3d(0, 100%, 0)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".fadeInUp": {
        "-webkit-animation-name": "fadeInUp",
        "animationName": "fadeInUp"
      },
      "@keyframes fadeInUpBig": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, 2000px, 0)",
          "transform": "translate3d(0, 2000px, 0)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".fadeInUpBig": {
        "-webkit-animation-name": "fadeInUpBig",
        "animationName": "fadeInUpBig"
      },
      "@keyframes fadeInTopLeft": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(-100%, -100%, 0)",
          "transform": "translate3d(-100%, -100%, 0)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".fadeInTopLeft": {
        "-webkit-animation-name": "fadeInTopLeft",
        "animationName": "fadeInTopLeft"
      },
      "@keyframes fadeInTopRight": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(100%, -100%, 0)",
          "transform": "translate3d(100%, -100%, 0)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".fadeInTopRight": {
        "-webkit-animation-name": "fadeInTopRight",
        "animationName": "fadeInTopRight"
      },
      "@keyframes fadeInBottomLeft": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(-100%, 100%, 0)",
          "transform": "translate3d(-100%, 100%, 0)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".fadeInBottomLeft": {
        "-webkit-animation-name": "fadeInBottomLeft",
        "animationName": "fadeInBottomLeft"
      },
      "@keyframes fadeInBottomRight": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(100%, 100%, 0)",
          "transform": "translate3d(100%, 100%, 0)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".fadeInBottomRight": {
        "-webkit-animation-name": "fadeInBottomRight",
        "animationName": "fadeInBottomRight"
      },
      "@keyframes fadeOut": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "opacity": "0"
        }
      },
      ".fadeOut": {
        "-webkit-animation-name": "fadeOut",
        "animationName": "fadeOut"
      },
      "@keyframes fadeOutDown": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, 100%, 0)",
          "transform": "translate3d(0, 100%, 0)"
        }
      },
      ".fadeOutDown": {
        "-webkit-animation-name": "fadeOutDown",
        "animationName": "fadeOutDown"
      },
      "@keyframes fadeOutDownBig": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, 2000px, 0)",
          "transform": "translate3d(0, 2000px, 0)"
        }
      },
      ".fadeOutDownBig": {
        "-webkit-animation-name": "fadeOutDownBig",
        "animationName": "fadeOutDownBig"
      },
      "@keyframes fadeOutLeft": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(-100%, 0, 0)",
          "transform": "translate3d(-100%, 0, 0)"
        }
      },
      ".fadeOutLeft": {
        "-webkit-animation-name": "fadeOutLeft",
        "animationName": "fadeOutLeft"
      },
      "@keyframes fadeOutLeftBig": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(-2000px, 0, 0)",
          "transform": "translate3d(-2000px, 0, 0)"
        }
      },
      ".fadeOutLeftBig": {
        "-webkit-animation-name": "fadeOutLeftBig",
        "animationName": "fadeOutLeftBig"
      },
      "@keyframes fadeOutRight": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(100%, 0, 0)",
          "transform": "translate3d(100%, 0, 0)"
        }
      },
      ".fadeOutRight": {
        "-webkit-animation-name": "fadeOutRight",
        "animationName": "fadeOutRight"
      },
      "@keyframes fadeOutRightBig": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(2000px, 0, 0)",
          "transform": "translate3d(2000px, 0, 0)"
        }
      },
      ".fadeOutRightBig": {
        "-webkit-animation-name": "fadeOutRightBig",
        "animationName": "fadeOutRightBig"
      },
      "@keyframes fadeOutUp": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, -100%, 0)",
          "transform": "translate3d(0, -100%, 0)"
        }
      },
      ".fadeOutUp": {
        "-webkit-animation-name": "fadeOutUp",
        "animationName": "fadeOutUp"
      },
      "@keyframes fadeOutUpBig": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(0, -2000px, 0)",
          "transform": "translate3d(0, -2000px, 0)"
        }
      },
      ".fadeOutUpBig": {
        "-webkit-animation-name": "fadeOutUpBig",
        "animationName": "fadeOutUpBig"
      },
      "@keyframes fadeOutTopLeft": {
        "from": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(-100%, -100%, 0)",
          "transform": "translate3d(-100%, -100%, 0)"
        }
      },
      ".fadeOutTopLeft": {
        "-webkit-animation-name": "fadeOutTopLeft",
        "animationName": "fadeOutTopLeft"
      },
      "@keyframes fadeOutTopRight": {
        "from": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(100%, -100%, 0)",
          "transform": "translate3d(100%, -100%, 0)"
        }
      },
      ".fadeOutTopRight": {
        "-webkit-animation-name": "fadeOutTopRight",
        "animationName": "fadeOutTopRight"
      },
      "@keyframes fadeOutBottomRight": {
        "from": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(100%, 100%, 0)",
          "transform": "translate3d(100%, 100%, 0)"
        }
      },
      ".fadeOutBottomRight": {
        "-webkit-animation-name": "fadeOutBottomRight",
        "animationName": "fadeOutBottomRight"
      },
      "@keyframes fadeOutBottomLeft": {
        "from": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(-100%, 100%, 0)",
          "transform": "translate3d(-100%, 100%, 0)"
        }
      },
      ".fadeOutBottomLeft": {
        "-webkit-animation-name": "fadeOutBottomLeft",
        "animationName": "fadeOutBottomLeft"
      },
      "@keyframes flip": {
        "from": {
          "-webkit-transform": "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
          "transform": "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
          "-webkit-animation-timing-function": "ease-out",
          "animationTimingFunction": "ease-out"
        },
        "40%": {
          "-webkit-transform": "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",
          "transform": "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",
          "-webkit-animation-timing-function": "ease-out",
          "animationTimingFunction": "ease-out"
        },
        "50%": {
          "-webkit-transform": "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",
          "transform": "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",
          "-webkit-animation-timing-function": "ease-in",
          "animationTimingFunction": "ease-in"
        },
        "80%": {
          "-webkit-transform": "perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",
          "transform": "perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",
          "-webkit-animation-timing-function": "ease-in",
          "animationTimingFunction": "ease-in"
        },
        "to": {
          "-webkit-transform": "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
          "transform": "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
          "-webkit-animation-timing-function": "ease-in",
          "animationTimingFunction": "ease-in"
        }
      },
      ".animated.flip": {
        "-webkit-backface-visibility": "visible",
        "backfaceVisibility": "visible",
        "-webkit-animation-name": "flip",
        "animationName": "flip"
      },
      "@keyframes flipInX": {
        "from": {
          "-webkit-transform": "perspective(400px) rotate3d(1, 0, 0, 90deg)",
          "transform": "perspective(400px) rotate3d(1, 0, 0, 90deg)",
          "-webkit-animation-timing-function": "ease-in",
          "animationTimingFunction": "ease-in",
          "opacity": "0"
        },
        "40%": {
          "-webkit-transform": "perspective(400px) rotate3d(1, 0, 0, -20deg)",
          "transform": "perspective(400px) rotate3d(1, 0, 0, -20deg)",
          "-webkit-animation-timing-function": "ease-in",
          "animationTimingFunction": "ease-in"
        },
        "60%": {
          "-webkit-transform": "perspective(400px) rotate3d(1, 0, 0, 10deg)",
          "transform": "perspective(400px) rotate3d(1, 0, 0, 10deg)",
          "opacity": "1"
        },
        "80%": {
          "-webkit-transform": "perspective(400px) rotate3d(1, 0, 0, -5deg)",
          "transform": "perspective(400px) rotate3d(1, 0, 0, -5deg)"
        },
        "to": {
          "-webkit-transform": "perspective(400px)",
          "transform": "perspective(400px)"
        }
      },
      ".flipInX": {
        "-webkit-backface-visibility": "visible !important",
        "backfaceVisibility": "visible !important",
        "-webkit-animation-name": "flipInX",
        "animationName": "flipInX"
      },
      "@keyframes flipInY": {
        "from": {
          "-webkit-transform": "perspective(400px) rotate3d(0, 1, 0, 90deg)",
          "transform": "perspective(400px) rotate3d(0, 1, 0, 90deg)",
          "-webkit-animation-timing-function": "ease-in",
          "animationTimingFunction": "ease-in",
          "opacity": "0"
        },
        "40%": {
          "-webkit-transform": "perspective(400px) rotate3d(0, 1, 0, -20deg)",
          "transform": "perspective(400px) rotate3d(0, 1, 0, -20deg)",
          "-webkit-animation-timing-function": "ease-in",
          "animationTimingFunction": "ease-in"
        },
        "60%": {
          "-webkit-transform": "perspective(400px) rotate3d(0, 1, 0, 10deg)",
          "transform": "perspective(400px) rotate3d(0, 1, 0, 10deg)",
          "opacity": "1"
        },
        "80%": {
          "-webkit-transform": "perspective(400px) rotate3d(0, 1, 0, -5deg)",
          "transform": "perspective(400px) rotate3d(0, 1, 0, -5deg)"
        },
        "to": {
          "-webkit-transform": "perspective(400px)",
          "transform": "perspective(400px)"
        }
      },
      ".flipInY": {
        "-webkit-backface-visibility": "visible !important",
        "backfaceVisibility": "visible !important",
        "-webkit-animation-name": "flipInY",
        "animationName": "flipInY"
      },
      "@keyframes flipOutX": {
        "from": {
          "-webkit-transform": "perspective(400px)",
          "transform": "perspective(400px)"
        },
        "30%": {
          "-webkit-transform": "perspective(400px) rotate3d(1, 0, 0, -20deg)",
          "transform": "perspective(400px) rotate3d(1, 0, 0, -20deg)",
          "opacity": "1"
        },
        "to": {
          "-webkit-transform": "perspective(400px) rotate3d(1, 0, 0, 90deg)",
          "transform": "perspective(400px) rotate3d(1, 0, 0, 90deg)",
          "opacity": "0"
        }
      },
      ".flipOutX": {
        "-webkit-animation-duration": "calc(var(--t-animate-duration) * 0.75)",
        "animationDuration": "calc(var(--t-animate-duration) * 0.75)",
        "-webkit-animation-name": "flipOutX",
        "animationName": "flipOutX",
        "-webkit-backface-visibility": "visible !important",
        "backfaceVisibility": "visible !important"
      },
      "@keyframes flipOutY": {
        "from": {
          "-webkit-transform": "perspective(400px)",
          "transform": "perspective(400px)"
        },
        "30%": {
          "-webkit-transform": "perspective(400px) rotate3d(0, 1, 0, -15deg)",
          "transform": "perspective(400px) rotate3d(0, 1, 0, -15deg)",
          "opacity": "1"
        },
        "to": {
          "-webkit-transform": "perspective(400px) rotate3d(0, 1, 0, 90deg)",
          "transform": "perspective(400px) rotate3d(0, 1, 0, 90deg)",
          "opacity": "0"
        }
      },
      ".flipOutY": {
        "-webkit-animation-duration": "calc(var(--t-animate-duration) * 0.75)",
        "animationDuration": "calc(var(--t-animate-duration) * 0.75)",
        "-webkit-backface-visibility": "visible !important",
        "backfaceVisibility": "visible !important",
        "-webkit-animation-name": "flipOutY",
        "animationName": "flipOutY"
      },
      "@keyframes lightSpeedInRight": {
        "from": {
          "-webkit-transform": "translate3d(100%, 0, 0) skewX(-30deg)",
          "transform": "translate3d(100%, 0, 0) skewX(-30deg)",
          "opacity": "0"
        },
        "60%": {
          "-webkit-transform": "skewX(20deg)",
          "transform": "skewX(20deg)",
          "opacity": "1"
        },
        "80%": {
          "-webkit-transform": "skewX(-5deg)",
          "transform": "skewX(-5deg)"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".lightSpeedInRight": {
        "-webkit-animation-name": "lightSpeedInRight",
        "animationName": "lightSpeedInRight",
        "-webkit-animation-timing-function": "ease-out",
        "animationTimingFunction": "ease-out"
      },
      "@keyframes lightSpeedInLeft": {
        "from": {
          "-webkit-transform": "translate3d(-100%, 0, 0) skewX(30deg)",
          "transform": "translate3d(-100%, 0, 0) skewX(30deg)",
          "opacity": "0"
        },
        "60%": {
          "-webkit-transform": "skewX(-20deg)",
          "transform": "skewX(-20deg)",
          "opacity": "1"
        },
        "80%": {
          "-webkit-transform": "skewX(5deg)",
          "transform": "skewX(5deg)"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".lightSpeedInLeft": {
        "-webkit-animation-name": "lightSpeedInLeft",
        "animationName": "lightSpeedInLeft",
        "-webkit-animation-timing-function": "ease-out",
        "animationTimingFunction": "ease-out"
      },
      "@keyframes lightSpeedOutRight": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "-webkit-transform": "translate3d(100%, 0, 0) skewX(30deg)",
          "transform": "translate3d(100%, 0, 0) skewX(30deg)",
          "opacity": "0"
        }
      },
      ".lightSpeedOutRight": {
        "-webkit-animation-name": "lightSpeedOutRight",
        "animationName": "lightSpeedOutRight",
        "-webkit-animation-timing-function": "ease-in",
        "animationTimingFunction": "ease-in"
      },
      "@keyframes lightSpeedOutLeft": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "-webkit-transform": "translate3d(-100%, 0, 0) skewX(-30deg)",
          "transform": "translate3d(-100%, 0, 0) skewX(-30deg)",
          "opacity": "0"
        }
      },
      ".lightSpeedOutLeft": {
        "-webkit-animation-name": "lightSpeedOutLeft",
        "animationName": "lightSpeedOutLeft",
        "-webkit-animation-timing-function": "ease-in",
        "animationTimingFunction": "ease-in"
      },
      "@keyframes rotateIn": {
        "from": {
          "-webkit-transform": "rotate3d(0, 0, 1, -200deg)",
          "transform": "rotate3d(0, 0, 1, -200deg)",
          "opacity": "0"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)",
          "opacity": "1"
        }
      },
      ".rotateIn": {
        "-webkit-animation-name": "rotateIn",
        "animationName": "rotateIn",
        "-webkit-transform-origin": "center",
        "transformOrigin": "center"
      },
      "@keyframes rotateInDownLeft": {
        "from": {
          "-webkit-transform": "rotate3d(0, 0, 1, -45deg)",
          "transform": "rotate3d(0, 0, 1, -45deg)",
          "opacity": "0"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)",
          "opacity": "1"
        }
      },
      ".rotateInDownLeft": {
        "-webkit-animation-name": "rotateInDownLeft",
        "animationName": "rotateInDownLeft",
        "-webkit-transform-origin": "left bottom",
        "transformOrigin": "left bottom"
      },
      "@keyframes rotateInDownRight": {
        "from": {
          "-webkit-transform": "rotate3d(0, 0, 1, 45deg)",
          "transform": "rotate3d(0, 0, 1, 45deg)",
          "opacity": "0"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)",
          "opacity": "1"
        }
      },
      ".rotateInDownRight": {
        "-webkit-animation-name": "rotateInDownRight",
        "animationName": "rotateInDownRight",
        "-webkit-transform-origin": "right bottom",
        "transformOrigin": "right bottom"
      },
      "@keyframes rotateInUpLeft": {
        "from": {
          "-webkit-transform": "rotate3d(0, 0, 1, 45deg)",
          "transform": "rotate3d(0, 0, 1, 45deg)",
          "opacity": "0"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)",
          "opacity": "1"
        }
      },
      ".rotateInUpLeft": {
        "-webkit-animation-name": "rotateInUpLeft",
        "animationName": "rotateInUpLeft",
        "-webkit-transform-origin": "left bottom",
        "transformOrigin": "left bottom"
      },
      "@keyframes rotateInUpRight": {
        "from": {
          "-webkit-transform": "rotate3d(0, 0, 1, -90deg)",
          "transform": "rotate3d(0, 0, 1, -90deg)",
          "opacity": "0"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)",
          "opacity": "1"
        }
      },
      ".rotateInUpRight": {
        "-webkit-animation-name": "rotateInUpRight",
        "animationName": "rotateInUpRight",
        "-webkit-transform-origin": "right bottom",
        "transformOrigin": "right bottom"
      },
      "@keyframes rotateOut": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "-webkit-transform": "rotate3d(0, 0, 1, 200deg)",
          "transform": "rotate3d(0, 0, 1, 200deg)",
          "opacity": "0"
        }
      },
      ".rotateOut": {
        "-webkit-animation-name": "rotateOut",
        "animationName": "rotateOut",
        "-webkit-transform-origin": "center",
        "transformOrigin": "center"
      },
      "@keyframes rotateOutDownLeft": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "-webkit-transform": "rotate3d(0, 0, 1, 45deg)",
          "transform": "rotate3d(0, 0, 1, 45deg)",
          "opacity": "0"
        }
      },
      ".rotateOutDownLeft": {
        "-webkit-animation-name": "rotateOutDownLeft",
        "animationName": "rotateOutDownLeft",
        "-webkit-transform-origin": "left bottom",
        "transformOrigin": "left bottom"
      },
      "@keyframes rotateOutDownRight": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "-webkit-transform": "rotate3d(0, 0, 1, -45deg)",
          "transform": "rotate3d(0, 0, 1, -45deg)",
          "opacity": "0"
        }
      },
      ".rotateOutDownRight": {
        "-webkit-animation-name": "rotateOutDownRight",
        "animationName": "rotateOutDownRight",
        "-webkit-transform-origin": "right bottom",
        "transformOrigin": "right bottom"
      },
      "@keyframes rotateOutUpLeft": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "-webkit-transform": "rotate3d(0, 0, 1, -45deg)",
          "transform": "rotate3d(0, 0, 1, -45deg)",
          "opacity": "0"
        }
      },
      ".rotateOutUpLeft": {
        "-webkit-animation-name": "rotateOutUpLeft",
        "animationName": "rotateOutUpLeft",
        "-webkit-transform-origin": "left bottom",
        "transformOrigin": "left bottom"
      },
      "@keyframes rotateOutUpRight": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "-webkit-transform": "rotate3d(0, 0, 1, 90deg)",
          "transform": "rotate3d(0, 0, 1, 90deg)",
          "opacity": "0"
        }
      },
      ".rotateOutUpRight": {
        "-webkit-animation-name": "rotateOutUpRight",
        "animationName": "rotateOutUpRight",
        "-webkit-transform-origin": "right bottom",
        "transformOrigin": "right bottom"
      },
      "@keyframes hinge": {
        "0%": {
          "-webkit-animation-timing-function": "ease-in-out",
          "animationTimingFunction": "ease-in-out"
        },
        "20%, 60%": {
          "-webkit-transform": "rotate3d(0, 0, 1, 80deg)",
          "transform": "rotate3d(0, 0, 1, 80deg)",
          "-webkit-animation-timing-function": "ease-in-out",
          "animationTimingFunction": "ease-in-out"
        },
        "40%, 80%": {
          "-webkit-transform": "rotate3d(0, 0, 1, 60deg)",
          "transform": "rotate3d(0, 0, 1, 60deg)",
          "-webkit-animation-timing-function": "ease-in-out",
          "animationTimingFunction": "ease-in-out",
          "opacity": "1"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 700px, 0)",
          "transform": "translate3d(0, 700px, 0)",
          "opacity": "0"
        }
      },
      ".hinge": {
        "-webkit-animation-duration": "calc(var(--t-animate-duration) * 2)",
        "animationDuration": "calc(var(--t-animate-duration) * 2)",
        "-webkit-animation-name": "hinge",
        "animationName": "hinge",
        "-webkit-transform-origin": "top left",
        "transformOrigin": "top left"
      },
      "@keyframes jackInTheBox": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "scale(0.1) rotate(30deg)",
          "transform": "scale(0.1) rotate(30deg)",
          "-webkit-transform-origin": "center bottom",
          "transformOrigin": "center bottom"
        },
        "50%": {
          "-webkit-transform": "rotate(-10deg)",
          "transform": "rotate(-10deg)"
        },
        "70%": {
          "-webkit-transform": "rotate(3deg)",
          "transform": "rotate(3deg)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "scale(1)",
          "transform": "scale(1)"
        }
      },
      ".jackInTheBox": {
        "-webkit-animation-name": "jackInTheBox",
        "animationName": "jackInTheBox"
      },
      "@keyframes rollIn": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)",
          "transform": "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"
        },
        "to": {
          "opacity": "1",
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".rollIn": {
        "-webkit-animation-name": "rollIn",
        "animationName": "rollIn"
      },
      "@keyframes rollOut": {
        "from": {
          "opacity": "1"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)",
          "transform": "translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"
        }
      },
      ".rollOut": {
        "-webkit-animation-name": "rollOut",
        "animationName": "rollOut"
      },
      "@keyframes zoomIn": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "scale3d(0.3, 0.3, 0.3)",
          "transform": "scale3d(0.3, 0.3, 0.3)"
        },
        "50%": {
          "opacity": "1"
        }
      },
      ".zoomIn": {
        "-webkit-animation-name": "zoomIn",
        "animationName": "zoomIn"
      },
      "@keyframes zoomInDown": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",
          "transform": "scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",
          "-webkit-animation-timing-function": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
          "animationTimingFunction": "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
        },
        "60%": {
          "opacity": "1",
          "-webkit-transform": "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
          "transform": "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
          "-webkit-animation-timing-function": "cubic-bezier(0.175, 0.885, 0.32, 1)",
          "animationTimingFunction": "cubic-bezier(0.175, 0.885, 0.32, 1)"
        }
      },
      ".zoomInDown": {
        "-webkit-animation-name": "zoomInDown",
        "animationName": "zoomInDown"
      },
      "@keyframes zoomInLeft": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",
          "transform": "scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",
          "-webkit-animation-timing-function": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
          "animationTimingFunction": "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
        },
        "60%": {
          "opacity": "1",
          "-webkit-transform": "scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",
          "transform": "scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",
          "-webkit-animation-timing-function": "cubic-bezier(0.175, 0.885, 0.32, 1)",
          "animationTimingFunction": "cubic-bezier(0.175, 0.885, 0.32, 1)"
        }
      },
      ".zoomInLeft": {
        "-webkit-animation-name": "zoomInLeft",
        "animationName": "zoomInLeft"
      },
      "@keyframes zoomInRight": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",
          "transform": "scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",
          "-webkit-animation-timing-function": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
          "animationTimingFunction": "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
        },
        "60%": {
          "opacity": "1",
          "-webkit-transform": "scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",
          "transform": "scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",
          "-webkit-animation-timing-function": "cubic-bezier(0.175, 0.885, 0.32, 1)",
          "animationTimingFunction": "cubic-bezier(0.175, 0.885, 0.32, 1)"
        }
      },
      ".zoomInRight": {
        "-webkit-animation-name": "zoomInRight",
        "animationName": "zoomInRight"
      },
      "@keyframes zoomInUp": {
        "from": {
          "opacity": "0",
          "-webkit-transform": "scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",
          "transform": "scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",
          "-webkit-animation-timing-function": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
          "animationTimingFunction": "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
        },
        "60%": {
          "opacity": "1",
          "-webkit-transform": "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
          "transform": "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
          "-webkit-animation-timing-function": "cubic-bezier(0.175, 0.885, 0.32, 1)",
          "animationTimingFunction": "cubic-bezier(0.175, 0.885, 0.32, 1)"
        }
      },
      ".zoomInUp": {
        "-webkit-animation-name": "zoomInUp",
        "animationName": "zoomInUp"
      },
      "@keyframes zoomOut": {
        "from": {
          "opacity": "1"
        },
        "50%": {
          "opacity": "0",
          "-webkit-transform": "scale3d(0.3, 0.3, 0.3)",
          "transform": "scale3d(0.3, 0.3, 0.3)"
        },
        "to": {
          "opacity": "0"
        }
      },
      ".zoomOut": {
        "-webkit-animation-name": "zoomOut",
        "animationName": "zoomOut"
      },
      "@keyframes zoomOutDown": {
        "40%": {
          "opacity": "1",
          "-webkit-transform": "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
          "transform": "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
          "-webkit-animation-timing-function": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
          "animationTimingFunction": "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",
          "transform": "scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",
          "-webkit-animation-timing-function": "cubic-bezier(0.175, 0.885, 0.32, 1)",
          "animationTimingFunction": "cubic-bezier(0.175, 0.885, 0.32, 1)"
        }
      },
      ".zoomOutDown": {
        "-webkit-animation-name": "zoomOutDown",
        "animationName": "zoomOutDown",
        "-webkit-transform-origin": "center bottom",
        "transformOrigin": "center bottom"
      },
      "@keyframes zoomOutLeft": {
        "40%": {
          "opacity": "1",
          "-webkit-transform": "scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)",
          "transform": "scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "scale(0.1) translate3d(-2000px, 0, 0)",
          "transform": "scale(0.1) translate3d(-2000px, 0, 0)"
        }
      },
      ".zoomOutLeft": {
        "-webkit-animation-name": "zoomOutLeft",
        "animationName": "zoomOutLeft",
        "-webkit-transform-origin": "left center",
        "transformOrigin": "left center"
      },
      "@keyframes zoomOutRight": {
        "40%": {
          "opacity": "1",
          "-webkit-transform": "scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)",
          "transform": "scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "scale(0.1) translate3d(2000px, 0, 0)",
          "transform": "scale(0.1) translate3d(2000px, 0, 0)"
        }
      },
      ".zoomOutRight": {
        "-webkit-animation-name": "zoomOutRight",
        "animationName": "zoomOutRight",
        "-webkit-transform-origin": "right center",
        "transformOrigin": "right center"
      },
      "@keyframes zoomOutUp": {
        "40%": {
          "opacity": "1",
          "-webkit-transform": "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
          "transform": "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
          "-webkit-animation-timing-function": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
          "animationTimingFunction": "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
        },
        "to": {
          "opacity": "0",
          "-webkit-transform": "scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",
          "transform": "scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",
          "-webkit-animation-timing-function": "cubic-bezier(0.175, 0.885, 0.32, 1)",
          "animationTimingFunction": "cubic-bezier(0.175, 0.885, 0.32, 1)"
        }
      },
      ".zoomOutUp": {
        "-webkit-animation-name": "zoomOutUp",
        "animationName": "zoomOutUp",
        "-webkit-transform-origin": "center bottom",
        "transformOrigin": "center bottom"
      },
      "@keyframes slideInDown": {
        "from": {
          "-webkit-transform": "translate3d(0, -100%, 0)",
          "transform": "translate3d(0, -100%, 0)",
          "visibility": "visible"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".slideInDown": {
        "-webkit-animation-name": "slideInDown",
        "animationName": "slideInDown"
      },
      "@keyframes slideInLeft": {
        "from": {
          "-webkit-transform": "translate3d(-100%, 0, 0)",
          "transform": "translate3d(-100%, 0, 0)",
          "visibility": "visible"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".slideInLeft": {
        "-webkit-animation-name": "slideInLeft",
        "animationName": "slideInLeft"
      },
      "@keyframes slideInRight": {
        "from": {
          "-webkit-transform": "translate3d(100%, 0, 0)",
          "transform": "translate3d(100%, 0, 0)",
          "visibility": "visible"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".slideInRight": {
        "-webkit-animation-name": "slideInRight",
        "animationName": "slideInRight"
      },
      "@keyframes slideInUp": {
        "from": {
          "-webkit-transform": "translate3d(0, 100%, 0)",
          "transform": "translate3d(0, 100%, 0)",
          "visibility": "visible"
        },
        "to": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        }
      },
      ".slideInUp": {
        "-webkit-animation-name": "slideInUp",
        "animationName": "slideInUp"
      },
      "@keyframes slideOutDown": {
        "from": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        },
        "to": {
          "visibility": "hidden",
          "-webkit-transform": "translate3d(0, 100%, 0)",
          "transform": "translate3d(0, 100%, 0)"
        }
      },
      ".slideOutDown": {
        "-webkit-animation-name": "slideOutDown",
        "animationName": "slideOutDown"
      },
      "@keyframes slideOutLeft": {
        "from": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        },
        "to": {
          "visibility": "hidden",
          "-webkit-transform": "translate3d(-100%, 0, 0)",
          "transform": "translate3d(-100%, 0, 0)"
        }
      },
      ".slideOutLeft": {
        "-webkit-animation-name": "slideOutLeft",
        "animationName": "slideOutLeft"
      },
      "@keyframes slideOutRight": {
        "from": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        },
        "to": {
          "visibility": "hidden",
          "-webkit-transform": "translate3d(100%, 0, 0)",
          "transform": "translate3d(100%, 0, 0)"
        }
      },
      ".slideOutRight": {
        "-webkit-animation-name": "slideOutRight",
        "animationName": "slideOutRight"
      },
      "@keyframes slideOutUp": {
        "from": {
          "-webkit-transform": "translate3d(0, 0, 0)",
          "transform": "translate3d(0, 0, 0)"
        },
        "to": {
          "visibility": "hidden",
          "-webkit-transform": "translate3d(0, -100%, 0)",
          "transform": "translate3d(0, -100%, 0)"
        }
      },
      ".slideOutUp": {
        "-webkit-animation-name": "slideOutUp",
        "animationName": "slideOutUp"
      }
    }
  }

  return createStyleSheet(ANIMATE_NAME, styles)
}