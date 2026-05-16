# Notification System Design

## What We Built

A system that shows the most important notifications first.

## The Problem

Users get lots of notifications and miss important ones. We needed to show the most relevant ones at the top.

## Our Solution

We sort notifications by what matters most:

1. Placement notifications are most important
2. Result notifications are second
3. Event notifications are least important

Within the same type, newer ones come first.

## How It Works

When notifications come in, we look at each one and decide its priority. Then we sort them and show the top 10.

A placement notification from today is more important than a placement from last week. A result from today is more important than an event from today.

## Example

If we have:
- Event from today
- Result from yesterday
- Placement from last week

We show them as:
1. Placement (most important type)
2. Result (second most important)
3. Event (least important)

## Why This Works

Users see what they need to see first. As more notifications come in, we just re-sort and show the top ones again.

It's simple, fast, and solves the problem.
