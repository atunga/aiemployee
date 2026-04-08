import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const dataDir = path.join(process.cwd(), "data");
const eventsPath = path.join(dataDir, "funnel-events.json");

type EventRecord = { createdAt: string; type: string } & Record<string, unknown>;

async function readEvents(): Promise<EventRecord[]> {
  try {
    const file = await readFile(eventsPath, "utf8");
    return JSON.parse(file) as EventRecord[];
  } catch {
    return [];
  }
}

export async function appendEvent(event: { type: string } & Record<string, unknown>) {
  await mkdir(dataDir, { recursive: true });
  const events = await readEvents();
  events.push({ ...event, createdAt: new Date().toISOString() });
  await writeFile(eventsPath, JSON.stringify(events, null, 2));
}
