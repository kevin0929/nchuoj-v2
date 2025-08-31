import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

const adminProblem = () => {
    return (
        <div className="mx-auto max-w-screen-xl mt-8">
            <div className="flex justify-between">
                <p className="text-2xl font-bold"> Admin Problems </p>
                <Button
                    variant="filled"
                    color="rgba(30, 64, 175, 1)"
                    leftSection={<IconPlus size={16} />}
                >
                    Add Problem
                </Button>
            </div>

        </div>
    )
}

export default adminProblem;