import { Source } from "./Source";

declare global {
  var CY: any
}

/*Prevents globalThis being reported as an error by eslint*/
/*global globalThis*/

// Singleton
let aiSdkInstance: AiSdkControls;
let source: Source;

async function downloadAiSdk() {
  if (globalThis.CY) {
    throw new Error("AI-SDK has already been downloaded.");
  }
}

async function initAiSdk() {
  if (aiSdkInstance) {
    throw new Error("An instance of the AI-SDK is already running.");
  }
  source = new Source();

  aiSdkInstance = await globalThis.CY.loader()
    .licenseKey("23c50405e029561ccfb9821a7c655c4eef70336bde47")
    .source(source)
    .addModule(globalThis.CY.modules().FACE_DETECTOR.name)
    .addModule(globalThis.CY.modules().FACE_EMOTION.name, {
      enableBalancer: false, // example of custom setting
      smoothness: 0.5,
    })
    .addModule(globalThis.CY.modules().FACE_GENDER.name, {})
    .addModule(globalThis.CY.modules().FACE_AGE.name, {
      windowSizeMs: 4000, // example of custom setting
      maxVarianceCutoff: Math.pow(7, 2),
      numericalStability: 1,
    })
    .addModule(globalThis.CY.modules().FACE_FEATURES.name, {})
    .addModule(globalThis.CY.modules().FACE_POSITIVITY.name, {})
    .addModule(globalThis.CY.modules().FACE_POSE.name, {})
    .addModule(globalThis.CY.modules().FACE_AROUSAL_VALENCE.name, {
      smoothness: 0.9, // example of custom setting
    })
    .addModule(globalThis.CY.modules().FACE_ATTENTION.name, {})
    .addModule(globalThis.CY.modules().DATA_AGGREGATOR.name, {})
    .load();
}

export type AiSdkControls = {
  getModule: any,
  stop: any,
  CY: any,
  start: any,
  source: any
}

/**
 * Loads the MorphCast SDK, only the first time, then returns the controls for the start / stop
 *
 * @returns {Promise<{getModule: *, stop: *, CY: *, start: *, source: *}>}
 */
// define the return type described above
export async function getAiSdkControls(): Promise<AiSdkControls> {
  if (globalThis.CY === undefined) {
    await downloadAiSdk();
  }
  if (aiSdkInstance === undefined) {
    await initAiSdk();
  }

  const { start, stop, getModule } = aiSdkInstance;
  return { start, stop, getModule, source, CY: globalThis.CY };
}
