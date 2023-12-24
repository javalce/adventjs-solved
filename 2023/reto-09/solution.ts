export function adjustLights(lights: string[]): number {
  const LIGHTS = {
    GREEN: '🟢',
    RED: '🔴',
  } as const;

  type Light = (typeof LIGHTS)[keyof typeof LIGHTS];

  const NEXT_LIGHT = {
    [LIGHTS.GREEN]: LIGHTS.RED,
    [LIGHTS.RED]: LIGHTS.GREEN,
  } as const;

  function getChangesForLight(currentLight: Light): number {
    let changes = 0;

    for (const light of lights) {
      if (light !== currentLight) {
        changes++;
      }

      currentLight = NEXT_LIGHT[currentLight];
    }

    return changes;
  }

  const greenChanges = getChangesForLight(LIGHTS.GREEN);
  const redChanges = getChangesForLight(LIGHTS.RED);

  return Math.min(greenChanges, redChanges);
}
