# Staff Portal Production Plan

The published [staff portal preview](../portal.html) is a demonstration only. It must not be used for real credentials or employee data.

## Recommended backend

Use Supabase for a small UK company service:

- Supabase Auth for email sign-in and MFA support.
- RLS policies with `admin`, `employee` and `approver` roles.
- Supabase Storage with private buckets for contracts and supporting documents.
- PostgreSQL tables for employees, policy versions, acknowledgements, tasks and audit events.
- UK region hosting where contractual or data-protection requirements apply.
- Secret keys only in trusted server or edge-function configuration, never in website source.

Firebase is also suitable when role claims and Storage rules are designed around the same least-privilege model.

## Minimum schema

- `profiles`: stable user ID, display name, status and role.
- `employees`: employee record ID, employment dates and sensitive personal fields restricted to authorised roles.
- `policies`: title, owner, status, version, effective date and review date.
- `policy_versions`: immutable version text or private file reference.
- `policy_acknowledgements`: employee, version, acknowledgement timestamp and optional evidence.
- `tasks`: assigned employee, category, due date and completion status.
- `documents`: document metadata and private storage reference.
- `audit_log`: actor, action, target, timestamp and integrity-safe event details.

## Required controls

- MFA for administrator accounts.
- Password recovery, rate limiting and account lockout/alert monitoring.
- Role checks enforced in database policies and storage rules.
- No employee personal data in the static HTML or JavaScript.
- Signed URLs or time-limited document access.
- Encrypted transport and storage.
- Audit retention and export controls.
- Data minimisation and documented retention periods.
- Secure account deactivation and data export/deletion workflow.
- Quarterly access review and annual security/continuity test.
- Vulnerability and dependency updates.
- UK GDPR lawful basis, DPIA assessment and processor terms before launch.
- Penetration testing before high-risk production use.

## Employment policy set

Before production, add UK-specific approved procedures for:

- disciplinary procedure and appeal
- capability and performance procedure
- work from home and home-working health and safety
- maternity leave and pay
- paternity/partner leave and pay
- shared parental leave
- parental leave
- sick leave and reasonable adjustments
- annual leave and time off
- flexible working
- retirement
- redundancy
- grievance
- leave for dependants
- domestic abuse support
- menopause support
- safeguarding, where applicable
- recruitment and right-to-work
- anti-harassment and bullying
- acceptable use and remote access
- expenses and anti-fraud
- records retention and deletion
