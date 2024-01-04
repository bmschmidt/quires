---
title: passing state
author: Ben Schmidt
...

The most powerful use of quires is for rich reactions to scroll events. This uses the custom Para component
[here](https://github.com/bmschmidt/quires/blob/main/src/routes/demo/observer/ParaObserver.svelte)
on the Markdown defined
[here](https://github.com/bmschmidt/quires/blob/main/src/routes/demo/observer/history.md)
The IntersectionObserver is created externally to the svelte components,
[here.](https://github.com/bmschmidt/quires/blob/main/src/routes/demo/observer/+page.md)

The Intersection Observer API reacts to each object. This creates some challenges to scoping, because you often want to deal with events
both inside a context and outside.    


```json
settings: {
  elements: {
    CodeBlock: MyCodeBlock
  }
}
```

But you can pass anything else that you want through.

It can be mutated, altered, and changed by any component. As a rule it's probably
wide to not create changes in state that are passed to siblings, but there's
nothing _stopping_ you. (Yet?)

Any javascript variable can be passed through settings. It can be something simple like
a boolean--for instance, you might assign the variable `show_code` as true or false
to determine whether code blocks display at all.

The main motivation for this, though, is to pass considerably more complicated objects through.
On this page the passed state includes an IntersectionObserver instance. The `Para` element
is reclassed to register every `Para` in the observer so thatas they scroll into view,
it changes their color and updates the counter in the upper left hand corner with their word count.

This specific use creates a few conundrums. Although we could register a different observer for
every `<p>`, that seems wasteful. Instead, the top level observerer function needs to have
some way of knowing what to do with a DOM element once it encounters it. Instead, I define a function
inside the `Para` component that has access to all variables at that scope, and then call from
inside the global observer.

Intersection Observer, specifically, seems like one of the most powerful uses of this library.
I may rewrite the base image image component to make use of an intersection observer for lazy-
loading.

If you want to use this to do something like update location within a table of contents,
it can be useful to run pandoc with the `--section-divs` flag, which creates wrapping `<div>`s
for each section.

I'd also welcome any thoughts on a terser syntax for working with Intersection Observer
in a variety of situatiions.

That's all I really have to say, but I'd better write some more text so you have more to read.

**Franklin Roosevelt Madison Square Garden Address, 1936.** The problem of the electorate is far deeper, far more vital than the continuance in the Presidency of any individual. For the greater issue goes beyond units of humanity—it goes to humanity itself.

In 1932 the issue was the restoration of American democracy; and the American people were in a mood to win. They did win. In 1936 the issue is the preservation of their victory. Again they are in a mood to win. Again they will win.

More than four years ago in accepting the Democratic nomination in Chicago, I said: “Give me your help not to win votes alone, but to win in this crusade to restore America to its own people.”

The banners of that crusade still fly in the van of a Nation that is on the march.

It is needless to repeat the details of the program which this Administration has been hammering out on the anvils of experience. No amount of misrepresentation or statistical contortion can conceal or blur or smear that record. Neither the attacks of unscrupulous enemies nor the exaggerations of over-zealous friends will serve to mislead the American people.

What was our hope in 1932? Above all other things the American people wanted peace. They wanted peace of mind instead of gnawing fear.

First, they sought escape from the personal terror which had stalked them for three years. They wanted the peace that comes from security in their homes: safety for their savings, permanence in their jobs, a fair profit from their enterprise.

Next, they wanted peace in the community, the peace that springs from the ability to meet the needs of community life: schools, playgrounds, parks, sanitation, highways—those things which are expected of solvent local government. They sought escape from disintegration and bankruptcy in local and state affairs.

They also sought peace within the Nation: protection of their currency, fairer wages, the ending of long hours of toil, the abolition of child labor, the elimination of wild-cat speculation, the safety of their children from kidnappers.

And, finally, they sought peace with other Nations—peace in a world of unrest. The Nation knows that I hate war, and I know that the Nation hates war.

I submit to you a record of peace; and on that record a well-founded expectation for future peace—peace for the individual, peace for the community, peace for the Nation, and peace with the world.

Tonight I call the roll—the roll of honor of those who stood with us in 1932 and still stand with us today.

Written on it are the names of millions who never had a chance—men at starvation wages, women in sweatshops, children at looms.

Written on it are the names of those who despaired, young men and young women for whom opportunity had become a will-o’-the-wisp.

Written on it are the names of farmers whose acres yielded only bitterness, business men whose books were portents of disaster, home owners who were faced with eviction, frugal citizens whose savings were insecure.

Written there in large letters are the names of countless other Americans of all parties and all faiths, Americans who had eyes to see and hearts to understand, whose consciences were burdened because too many of their fellows were burdened, who looked on these things four years ago and said, “This can be changed. We will change it.”

We still lead that army in 1936. They stood with us then because in 1932 they believed. They stand with us today because in 1936 they know. And with them stand millions of new recruits who have come to know.

Their hopes have become our record.

We have not come this far without a struggle and I assure you we cannot go further without a struggle.

For twelve years this Nation was afflicted with hear-nothing, see-nothing, do-nothing Government. The Nation looked to Government but the Government looked away. Nine mocking years with the golden calf and three long years of the scourge! Nine crazy years at the ticker and three long years in the breadlines! Nine mad years of mirage and three long years of despair! Powerful influences strive today to restore that kind of government with its doctrine that that Government is best which is most indifferent.

For nearly four years you have had an Administration which instead of twirling its thumbs has rolled up its sleeves. We will keep our sleeves rolled up.

We had to struggle with the old enemies of peace—business and financial monopoly, speculation, reckless banking, class antagonism, sectionalism, war profiteering.

They had begun to consider the Government of the United States as a mere appendage to their own affairs. We know now that Government by organized money is just as dangerous as Government by organized mob.

Never before in all our history have these forces been so united against one candidate as they stand today. They are unanimous in their hate for me—and I welcome their hatred.

I should like to have it said of my first Administration that in it the forces of selfishness and of lust for power met their match. I should like to have it said of my second Administration that in it these forces met their master.

The American people know from a four-year record that today there is only one entrance to the White House—by the front door. Since March 4, 1933, there has been only one pass-key to the White House. I have carried that key in my pocket. It is there tonight. So long as I am President, it will remain in my pocket.

Those who used to have pass-keys are not happy. Some of them are desperate. Only desperate men with their backs to the wall would descend so far below the level of decent citizenship as to foster the current pay-envelope campaign against America’s working people. Only reckless men, heedless of consequences, would risk the disruption of the hope for a new peace between worker and employer by returning to the tactics of the labor spy.

Here is an amazing paradox! The very employers and politicians and publishers who talk most loudly of class antagonism and the destruction of the American system now undermine that system by this attempt to coerce the votes of the wage earners of this country. It is the 1936 version of the old threat to close down the factory or the office if a particular candidate does not win. It is an old strategy of tyrants to delude their victims into fighting their battles for them.

Every message in a pay envelope, even if it is the truth, is a command to vote according to the will of the employer. But this propaganda is worse—it is deceit.

They tell the worker his wage will be reduced by a contribution to some vague form of old-age insurance. They carefully conceal from him the fact that for every dollar of premium he pays for that insurance, the employer pays another dollar. That omission is deceit.

They carefully conceal from him the fact that under the federal law, he receives another insurance policy to help him if he loses his job, and that the premium of that policy is paid 100 percent by the employer and not one cent by the worker. They do not tell him that the insurance policy that is bought for him is far more favorable to him than any policy that any private insurance company could afford to issue. That omission is deceit.

They imply to him that he pays all the cost of both forms of insurance. They carefully conceal from him the fact that for every dollar put up by him his employer puts up three dollars three for one. And that omission is deceit.

But they are guilty of more than deceit. When they imply that the reserves thus created against both these policies will be stolen by some future Congress, diverted to some wholly foreign purpose, they attack the integrity and honor of American Government itself. Those who suggest that, are already aliens to the spirit of American democracy. Let them emigrate and try their lot under some foreign flag in which they have more confidence.

The fraudulent nature of this attempt is well shown by the record of votes on the passage of the Social Security Act. In addition to an overwhelming majority of Democrats in both Houses, seventy-seven Republican Representatives voted for it and only eighteen against it and fifteen Republican Senators voted for it and only five against it. Where does this last-minute drive of the Republican leadership leave these Republican Representatives and Senators who helped enact this law?

I am sure the vast majority of law-abiding businessmen who are not parties to this propaganda fully appreciate the extent of the threat to honest business contained in this coercion.

I have expressed indignation at this form of campaigning and I am confident that the overwhelming majority of employers, workers and the general public share that indignation and will show it at the polls on Tuesday next.

Aside from this phase of it, I prefer to remember this campaign not as bitter but only as hard-fought. There should be no bitterness or hate where the sole thought is the welfare of the United States of America. No man can occupy the office of President without realizing that he is President of all the people.

It is because I have sought to think in terms of the whole Nation that I am confident that today, just as four years ago, the people want more than promises.

Our vision for the future contains more than promises.

This is our answer to those who, silent about their own plans, ask us to state our objectives.

Of course we will continue to seek to improve working conditions for the workers of America—to reduce hours over-long, to increase wages that spell starvation, to end the labor of children, to wipe out sweatshops. Of course we will continue every effort to end monopoly in business, to support collective bargaining, to stop unfair competition, to abolish dishonorable trade practices. For all these we have only just begun to fight.

Of course we will continue to work for cheaper electricity in the homes and on the farms of America, for better and cheaper transportation, for low interest rates, for sounder home financing, for better banking, for the regulation of security issues, for reciprocal trade among nations, for the wiping out of slums. For all these we have only just begun to fight.

Of course we will continue our efforts in behalf of the farmers of America. With their continued cooperation we will do all in our power to end the piling up of huge surpluses which spelled ruinous prices for their crops. We will persist in successful action for better land use, for reforestation, for the conservation of water all the way from its source to the sea, for drought and flood control, for better marketing facilities for farm commodities, for a definite reduction of farm tenancy, for encouragement of farmer cooperatives, for crop insurance and a stable food supply. For all these we have only just begun to fight.

Of course we will provide useful work for the needy unemployed; we prefer useful work to the pauperism of a dole.

Here and now I want to make myself clear about those who disparage their fellow citizens on the relief rolls. They say that those on relief are not merely jobless—that they are worthless. Their solution for the relief problem is to end relief—to purge the rolls by starvation. To use the language of the stock broker, our needy unemployed would be cared for when, as, and if some fairy godmother should happen on the scene.

You and I will continue to refuse to accept that estimate of our unemployed fellow Americans. Your Government is still on the same side of the street with the Good Samaritan and not with those who pass by on the other side.

Again—what of our objectives?

Of course we will continue our efforts for young men and women so that they may obtain an education and an opportunity to put it to use. Of course we will continue our help for the crippled, for the blind, for the mothers, our insurance for the unemployed, our security for the aged. Of course we will continue to protect the consumer against unnecessary price spreads, against the costs that are added by monopoly and speculation. We will continue our successful efforts to increase his purchasing power and to keep it constant.

For these things, too, and for a multitude of others like them, we have only just begun to fight.

All this—all these objectives—spell peace at home. All our actions, all our ideals, spell also peace with other nations.

Today there is war and rumor of war. We want none of it. But while we guard our shores against threats of war, we will continue to remove the causes of unrest and antagonism at home which might make our people easier victims to those for whom foreign war is profitable. You know well that those who stand to profit by war are not on our side in this campaign.

“Peace on earth, good will toward men”—democracy must cling to that message. For it is my deep conviction that democracy cannot live without that true religion which gives a nation a sense of justice and of moral purpose. Above our political forums, above our market places stand the altars of our faith—altars on which burn the fires of devotion that maintain all that is best in us and all that is best in our Nation.

We have need of that devotion today. It is that which makes it possible for government to persuade those who are mentally prepared to fight each other to go on instead, to work for and to sacrifice for each other. That is why we need to say with the Prophet: “What doth the Lord require of thee—but to do justly, to love mercy and to walk humbly with thy God.” That is why the recovery we seek, the recovery we are winning, is more than economic. In it are included justice and love and humility, not for ourselves as individuals alone, but for our Nation.

That is the road to peace.
