1. What is JSX, and why is it used?
   JSX হলো JavaScript XML এর সংক্ষিপ্ত রূপ। এটা মূলত JavaScript এর ভেতরে HTML-এর মতো কোড লিখতে দেয়। এর মাধ্যমে আমরা UI কেমন হবে সেটা সহজে লিখতে পারি। JSX ব্যবহার করলে কোড অনেক readable হয় এবং React এর component গুলো তৈরি করা সহজ হয়ে যায়।

2. What is the difference between State and Props?
   (1) State হলো component-এর ভেতরে data রাখার ব্যবস্থা, যেটা সময়ের সাথে সাথে পরিবর্তন হতে পারে।
   (ii)Props হলো parent component থেকে child component এ পাঠানো data, যেটা child শুধু ব্যবহার করতে পারে কিন্তু সরাসরি পরিবর্তন করতে পারে না।

   সহজভাবে বললে, State মানে component-এর নিজের data, আর Props মানে বাইরে থেকে আসা data।

3. What is the useState hook, and how does it work?
   useState হলো React-এর একটি hook, যেটা function component এর ভেতরে state তৈরি করতে দেয়। এটা একটা array return করে — প্রথমে থাকে state এর current value আর দ্বিতীয়টা থাকে function, যেটা দিয়ে state update করা যায়। যখনই আমরা state update করি, component আবার re-render হয় এবং নতুন data UI তে দেখা যায়।

4. How can you share state between components in React?
   State share করার জন্য সাধারণত state-টা parent component এ রাখা হয়, তারপর props এর মাধ্যমে child component গুলোতে পাঠানো হয়। এভাবে একাধিক component একই data ব্যবহার করতে পারে। আর যদি project বড় হয়, তখন Context API বা state management library ব্যবহার করা হয়।

5. How is event handling done in React?
   React এ event handling হয় JavaScript এর event এর মতোই, তবে এখানে camelCase ব্যবহার করতে হয় (যেমন onClick এর বদলে onclick নয়)। Event handler হিসেবে সাধারণত একটা function দেয়া হয়। যখন user event (যেমন click, change, submit) ট্রিগার করে, তখন সেই function call হয়।
