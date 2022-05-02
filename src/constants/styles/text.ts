import type { SemanticTheme } from '$models/semantic-theme/theme'

export const textSecondary = (theme: SemanticTheme): any => ({
  textTransform: 'uppercase',
  color: theme.colors.text.tertiary,
  fontSize: '0.8rem',
  fontWeight: 500,
})

export const textPrimary: any = {
  fontWeight: 500,
  fontSize: '1.1rem',
  lineHeight: 1,
}
