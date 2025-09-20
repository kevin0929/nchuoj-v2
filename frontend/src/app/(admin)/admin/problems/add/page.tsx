"use client";

import { useState } from "react";
import { TextInput, NumberInput } from "@mantine/core";
import Editor from "@/components/common/Editor";

const addProblem = () => {
    const [name, setName] = useState<string>("");
    const [timeLimit, setTimeLimit] = useState<number>(1000);
    const [memoryLimit, setMemoryLimit] = useState<number>(256);
    const [description, setDescription] = useState<string>("");

    return (
        <div className="mx-auto max-w-screen-xl mt-8">
            <div className="flex justify-between">
                <p className="text-2xl font-bold"> Add New Problem </p>
            </div>
            <div className="flex flex-col mt-8">
                <div className="flex gap-8">
                    <TextInput size="md" w={400} label="Name" onChange={(event) => setName(event.currentTarget.value)} />
                    <NumberInput size="md" w={200} label="Time Limit" placeholder="MS" onChange={(value) => setTimeLimit(Number(value))} />
                    <NumberInput size="md" w={200} label="Memory Limit" placeholder="MB" onChange={(value) => setMemoryLimit(Number(value))} />
                </div>
                <div className="mt-8">
                    <div className="mb-2 block text-sm font-medium">Description</div>
                    <Editor value={description} onChange={setDescription} height={400} />
                </div>
            </div>
        </div>
    )
}

export default addProblem;