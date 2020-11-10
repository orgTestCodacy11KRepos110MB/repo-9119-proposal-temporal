// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.withcalendar
---*/

const calendar = Temporal.Calendar.from("iso8601");
const instance = Temporal.PlainTime.from("12:34:56.987654321");
const result = instance.withCalendar(calendar);
assert.sameValue(result.hour, 12, "hour result");
assert.sameValue(result.minute, 34, "minute result");
assert.sameValue(result.second, 56, "second result");
assert.sameValue(result.millisecond, 987, "millisecond result");
assert.sameValue(result.microsecond, 654, "microsecond result");
assert.sameValue(result.nanosecond, 321, "nanosecond result");
assert.sameValue(result.calendar, calendar, "calendar result");
assert.sameValue(Object.getPrototypeOf(result), Temporal.PlainTime.prototype);
