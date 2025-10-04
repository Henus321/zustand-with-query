import PageHead from "@/components/PageHead";
import TodoForm from "./components/TodoForm";

import { ROUTES } from "@/config";

const Todos = () => {
    return (
        <div>
            <PageHead title={ROUTES.todos.label} />

            <TodoForm />
        </div>
    );
};

export default Todos;
