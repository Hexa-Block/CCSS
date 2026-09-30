import posthog from 'posthog-js'

const cookielessEvents = new Set(['$pageview', '$pageleave', '$web_vitals'])
const cookielessInteractions = new Set(['click', 'change'])
const localHostnames = new Set(['localhost', '127.0.0.1', '[::1]'])
const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST
const isLocalhost = localHostnames.has(window.location.hostname)

if (projectToken && apiHost) {
  posthog.init(projectToken, {
    api_host: apiHost,
    defaults: '2026-05-30',
    cookieless_mode: 'on_reject',
    disable_session_recording: true,
    before_send: (event) => {
      if (!event || isLocalhost) {
        return null
      }

      if (posthog.get_explicit_consent_status() !== 'denied') {
        return event
      }

      if (cookielessEvents.has(event.event)) {
        return event
      }

      const interactionType = event.properties?.$event_type
      const isAllowedInteraction =
        event.event === '$autocapture' &&
        typeof interactionType === 'string' &&
        cookielessInteractions.has(interactionType)

      return isAllowedInteraction ? event : null
    },
  })
}
