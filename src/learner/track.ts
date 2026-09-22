import { api } from '../lib/api';

/** A light usage signal (Study Guide views and downloads, downloads of the learner's own work) for instructor metrics. */
export function track(courseId: string, type: 'guide_view' | 'guide_download' | 'work_download') {
  void api('/learner/track', { body: { courseId, type } }).catch(() => undefined);
}
