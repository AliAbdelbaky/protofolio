import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import axios from "axios";
interface State {
  name: string | null;
  email: string | null;
  service: number | string | null;
  budget: number | string | null;
  message: string | null;
}
export default function () {
  const loading = ref(false);
  const snackbar = reactive({
    value: false,
    text: "",
  });
  const state = reactive<State>({
    name: null,
    email: null,
    service: null,
    budget: null,
    message: null,
  });
  const serveices = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const budgets = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const rules = {
    name: { required },
    email: { required, email },
    service: { required },
    budget: { required },
    message: { required, minLength: minLength(10) },
  };
  // @ts-ignore
  const v$ = useVuelidate(rules, state);
  const app = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      withCredentials: true,
      common: {
        Accept: "text/plain, */*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    },
  });
  const submit = async () => {
    v$.value.$validate();
    if (!v$.value.$invalid) {
      loading.value = true;
      try {
        const { data } = await app.post("contactme", state);
        snackbar.text = data?.msg;
        console.log(data);
        snackbar.value = true;
        loading.value = false;
      } catch (e) {
        loading.value = false;
      }
    } else return;
  };

  return { state, v$, serveices, budgets, submit, snackbar, loading };
}
