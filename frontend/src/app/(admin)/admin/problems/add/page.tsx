import { TextInput, NumberInput } from "@mantine/core";

const addProblem = () => {
    return (
        <div className="mx-auto max-w-screen-xl mt-8">
            <div className="flex justify-between">
                <p className="text-2xl font-bold"> Add New Problem </p>
            </div>
            <div className="flex flex-col mt-8">
                <div className="flex gap-8">
                    <TextInput size="md" w={400} label="Name" />
                    <NumberInput size="md" w={200} label="Time Limit" placeholder="MS" />
                    <NumberInput size="md" w={200} label="Memory Limit" placeholder="MB" />
                </div>
            </div>
        </div>
    )
}

export default addProblem;