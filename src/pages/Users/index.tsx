import { ROUTES } from "@/config";

import Button from "@/components/Button";
import PageHead from "@/components/PageHead";

const Users = () => {
    return (
        <div>
            <PageHead title={ROUTES.users.label} />
            <Button />
        </div>
    );
};

export default Users;
