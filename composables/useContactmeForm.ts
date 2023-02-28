import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default function () {
  const state = reactive({
    name: "",
    email: "",
    select: null,
    checkbox: null,
  });
  const serveices = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const budgets = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const rules = {
    name: { required },
    email: { required, email },
    select: { required },
    items: { required },
    checkbox: { required },
  };
  const v$ = useVuelidate(rules, state);

  return { state, v$, serveices, budgets };
}
