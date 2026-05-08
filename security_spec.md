# Security Specification for HD Chinese

## Data Invariants
1. A user can only access their own profile, stats, daily plans, weak words, and test results.
2. User profile (`/users/{userId}`) is only editable by the owner.
3. Daily plans, weak words, and test results are private to the user.
4. Timestamps (`createdAt`, `updatedAt`, `completedAt`) must be server-generated.
5. `strengthLevel` of a weak word must be one of the allowed enums.
6. `progressPercent` in a daily plan must be between 0 and 100.

## The "Dirty Dozen" Payloads

1. **Identity Spoofing**: Attempt to create a document in `/users/attackerId` with `uid: "victimId"`.
2. **Cross-User Leak**: Authenticated user A tries to `get` `/users/userB/dailyPlans/2026-05-08`.
3. **Ghost Field Update**: User tries to update their profile with `isAdmin: true`.
4. **Invalid State Skip**: User tries to update a weak word `strengthLevel` directly to `mastered` without correct reviews. (Actually, we'll use `hasOnly` to control which fields can be updated).
5. **Terminal State Break**: (Not applicable yet, but could be for locked test results).
6. **Resource Poisoning**: Injection of a giant string into `chinese` field of a weak word.
7. **Orphaned Writes**: Creating a `dailyPlan` without a valid user document (using `exists()` for `create`).
8. **PII Blanket Read**: Trying to `list` all users to scrape emails.
9. **Fake Timestamp**: Sending a client-side `updatedAt` that is 5 years in the future.
10. **Negative Score**: User tries to save a mock test result with `score: -100`.
11. **Excessive Points**: User tries to set `totalPoints: 999999` in a daily plan.
12. **Path Injection**: Using `../` or junk characters in document IDs.

## Test Runner (TDD)
I will implement `firestore.rules` and verify it prevents these.
