import { DirectiveBinding, ObjectDirective } from "vue";

interface CountupBinding {
  value?: number | { value: number };
  duration?: number;
  decimals?: number;
  startVal?: number;
}

interface CountupInstance {
  start: () => void;
  update: (newEndVal: number) => void;
  reset: () => void;
}

interface CountupHTMLElement extends HTMLElement {
  _countupInstance?: CountupInstance;
}

const defaultOptions = {
  duration: 2, // 计数动画时长 (秒)
  decimals: 0, // 小数位数
  startVal: 0, // 初始值
};

export const vCountup: ObjectDirective<CountupHTMLElement, CountupBinding> = {
  mounted(el: CountupHTMLElement, binding: DirectiveBinding<CountupBinding>) {
    let endValue: number = 0;

    const value = binding.value;
    if (typeof value === "number") {
      endValue = value;
    } else if (
      typeof value === "object" &&
      value !== null &&
      "value" in value
    ) {
      endValue = value.value as number;
    } else if (typeof el.textContent === "string") {
      endValue = Number(el.textContent.trim());
    }

    if (isNaN(endValue)) {
      console.warn("[v-countup] Invalid target value, defaulting to 0.");
      endValue = 0;
    }

    const options = {
      ...defaultOptions,
      ...Object.fromEntries(
        Object.entries(binding.modifiers).map(([key, val]) => [
          key,
          val
            ? Number(key) || defaultOptions[key as keyof typeof defaultOptions]
            : undefined,
        ])
      ),
    };

    el._countupInstance = createCountupInstance(el, endValue, options);
    el._countupInstance.start();
  },

  updated(el: CountupHTMLElement, binding: DirectiveBinding<CountupBinding>) {
    if (!el._countupInstance) return;

    let newValue: number = 0;
    const value = binding.value;

    if (typeof value === "number") {
      newValue = value;
    } else if (
      typeof value === "object" &&
      value !== null &&
      "value" in value
    ) {
      newValue = value.value as number;
    } else if (typeof el.textContent === "string") {
      newValue = Number(el.textContent.trim());
    }

    if (!isNaN(newValue)) {
      el._countupInstance.update(newValue);
    }
  },

  unmounted(el: CountupHTMLElement) {
    if (el._countupInstance) {
      el._countupInstance = undefined;
    }
  },
};

// 计数器实例工厂函数
function createCountupInstance(
  el: CountupHTMLElement,
  endValue: number,
  options: typeof defaultOptions
): CountupInstance {
  let current = options.startVal;
  let timer: number | null = null;

  const start = () => {
    if (timer !== null) clearInterval(timer);

    const step = (endValue - current) / (options.duration * 60);
    timer = window.setInterval(() => {
      current += step;
      if (
        (step > 0 && current >= endValue) ||
        (step < 0 && current <= endValue)
      ) {
        current = endValue;
        if (timer !== null) clearInterval(timer);
      }
      el.textContent = current.toFixed(options.decimals);
    }, 1000 / 60);
  };

  const update = (newEndVal: number) => {
    endValue = newEndVal;
    start();
  };

  const reset = () => {
    if (timer !== null) clearInterval(timer);
    current = options.startVal;
    el.textContent = current.toFixed(options.decimals);
  };

  return { start, update, reset };
}
