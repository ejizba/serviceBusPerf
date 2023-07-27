import { AzureFunction, Context } from "@azure/functions"

const serviceBusQueueTrigger: AzureFunction = async function(context: Context, mySbMsg: any): Promise<void> {
    context.log('ServiceBus queue trigger function processed message', mySbMsg);
    const interval = 500;
    await delaySync(interval);
};

async function delayAsync(ms: number): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

function delaySync(ms: number): void {
    const endTime = Date.now() + ms;
    while (Date.now() < endTime) {};
}

export default serviceBusQueueTrigger;

/*
A sampling of invocations using "delaySync"
[2023-07-27T01:31:03.275Z] Executed 'Functions.ServiceBusQueueTrigger1' (Succeeded, Id=62f543eb-4e26-403a-8b75-44728d901b27, Duration=15200ms)
[2023-07-27T01:31:03.276Z] Executed 'Functions.ServiceBusQueueTrigger1' (Succeeded, Id=beecc26d-b9dc-45f8-9132-469fa3f16011, Duration=15195ms)
[2023-07-27T01:31:03.276Z] Executed 'Functions.ServiceBusQueueTrigger1' (Succeeded, Id=414a29f6-c885-4f28-bcca-c13324af403b, Duration=15193ms)
[2023-07-27T01:31:03.277Z] Executed 'Functions.ServiceBusQueueTrigger1' (Succeeded, Id=7df6895b-5011-4837-9cb9-e4b8230f3c98, Duration=15194ms)
[2023-07-27T01:31:03.282Z] Executed 'Functions.ServiceBusQueueTrigger1' (Succeeded, Id=26003aa9-e636-4ba1-80ae-2d68afbe4f29, Duration=15199ms)
[2023-07-27T01:31:03.282Z] Executed 'Functions.ServiceBusQueueTrigger1' (Succeeded, Id=e4c94799-369e-49fb-af40-f51a4b9a1832, Duration=15199ms)
*/

/*
A sampling of invocations using "delayAsync"
[2023-07-27T01:32:45.758Z] Executed 'Functions.ServiceBusQueueTrigger1' (Succeeded, Id=fca7660a-5acf-4383-9cf1-007bd8f87487, Duration=630ms)
[2023-07-27T01:32:46.169Z] Executed 'Functions.ServiceBusQueueTrigger1' (Succeeded, Id=41978e85-2a27-4da0-a5e1-b3653cdce89f, Duration=504ms)
[2023-07-27T01:32:46.177Z] Executed 'Functions.ServiceBusQueueTrigger1' (Succeeded, Id=1b9f5360-57ba-47ed-acdd-b3914adf1f57, Duration=504ms)
[2023-07-27T01:32:46.187Z] Executed 'Functions.ServiceBusQueueTrigger1' (Succeeded, Id=7095fe35-1b5e-42c8-ba67-9d87ae89936a, Duration=513ms)
[2023-07-27T01:32:46.189Z] Executed 'Functions.ServiceBusQueueTrigger1' (Succeeded, Id=00a0fe26-f718-4f5f-a65d-de3e7cc5a32e, Duration=503ms)
[2023-07-27T01:32:46.190Z] Executed 'Functions.ServiceBusQueueTrigger1' (Succeeded, Id=1afbaf0a-9c49-4e0f-839f-a200a1c4edfd, Duration=505ms)
*/