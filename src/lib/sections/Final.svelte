<script lang="ts">
	import Button from '$lib/utils/Button.svelte';

	let inputValue = 0;
	let isStaking = true;
</script>

<div class="section-wrapper">
	<div class="section">
		<h3>TERMS AND CONDITIONS OF THE ONEOF FOUNDATION DAO'S TOKEN AND USE</h3>
		<p class="disclaimer-text">
			Prior to claiming the OneOf Foundation DAO Tokens, you should carefully consider these Terms and, to the extent necessary, consult a lawyer, accountant, and/or tax professional, as applicable.
		</p>
		<p class="disclaimer-text">
		Claiming of the OneOf Foundation DAO's Tokens should be undertaken only by individuals or companies that have significant experience with, and understanding of, the usage and intricacies of cryptographic tokens, including Ethereum-based tokens, Tezos-based tokens and blockchain-based software systems. Token Claimers should have an expert understanding of the storage and transmission mechanisms associated with cryptographic tokens, the operation of the blockchain and interacting with decentralized web applications. While the OneOf Foundation DAO (also referred to herein as Foundation) will be available to assist the Claimers of Tokens during the Token Claim, the Foundation will not be responsible in any way for loss of any cryptocurrency, including Tokens, resulting from actions taken by, or omitted by Claimer. If you do not have such experience or expertise, then you should not claim any Tokens or participate in the Token distribution process. Your participation in the Token distribution is deemed to be your understanding and acknowledgment that you satisfy the requirements mentioned in this paragraph.
		</p>
		<p class="disclaimer-text">
		As further described herein, by claiming Tokens, and to the extent permitted by law, you agree to not hold the OneOf Foundation DAO its respective past, present, and future employees, officers, directors, contractors, consultants, equity holders, suppliers, vendors, service providers, parent companies, subsidiaries, affiliates, agents, representatives, predecessors, successors and/or designees liable for any losses or any special, incidental, or consequential damages arising from, or in any way connected, to the claim of Tokens, including losses associated with these Terms.
		</p>
		<p class="disclaimer-text">
		You acknowledge, understand and agree that:
		</p>		
		<p class="disclaimer-text">
			You are subject to and bound by these Terms by virtue of claiming the OneOf Foundation Tokens.			
		</p>		
		<ul class="b">
			<li>The Tokens have no rights, intended uses or attributes outside of use with the OneOf Foundation DAO Platform or as otherwise expressly referred to in these Terms.</li>
			<li>A claim of Tokens cannot be cancelled.</li>
			<li>A claim of Tokens involves many, varied risks which can result in the loss of all amounts paid for gas or any other transaction fee.</li>
			<li>The Foundation reserves the right to refuse or cancel Token claim requests at any time in its sole and absolute discretion.</li>
			<li>The Tokens are not backed by any physical bullion or other assets which a Claimer would have any rights or access to.</li>
			<li>Other Token claimers who made their claims at a different time may receive more Tokens from the OneOf Foundation DAO. In an effort to be completely transparent the tokens are valued via a descretionary pricing scheme which was determined by the total treasury of assets or purchases by non-US residences and other music entertainment assets, and rights granted to the OneOf Foundation DAO by the OneOf Incorporated regarding the community participation in marketing, highlighting and promoting artists on OneOf's Marketplace and platform. This claim function and other token distribution methods including the Merkle distributor was entirely descretionary and subject to change up to the moment the claimer claims.</li>
		</ul>						
		<p class="disclaimer-text">
		NOTHING IN THESE TERMS SHALL BE DEEMED TO CONSTITUTE A PROSPECTUS OF ANY SORT, A SOLICITATION FOR INVESTMENT OR INVESTMENT ADVICE NOR DOES IT IN ANY WAY PERTAIN TO AN OFFERING OR A SOLICITATION OF AN OFFER TO BUY ANY SECURITIES IN ANY JURISDICTION. TO THE MAXIMUM AMOUNT PERMITTED BY APPLICABLE LAW, EACH OF THE ENTITIES, ONEOF FOUNDATION DAO, ONEOF INCORPORATED (COLLECTIVELY, THE “ASSOCIATED PARTIES” AND EACH AN “ASSOCIATED PARTY”) EXPRESSLY DISCLAIM AND SHALL NOT BE LIABLE FOR ANY AND ALL RESPONSIBILITY FOR ANY DIRECT OR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR OTHER LOSSES OF ANY KIND, IN TORT, CONTRACT OR OTHERWISE (INCLUDING BUT NOT LIMITED TO LOSS OF REVENUE, INCOME OR PROFITS, AND LOSS OF USE OR DATA), ARISING OUT OF OR IN CONNECTION WITH (I) THE CLAIMER’S ACCEPTANCE OF OR RELIANCE ON ANY INFORMATION CONTAINED IN THESE TERMS OR THE WHITEPAPER, (II) ANY ERROR, OMISSION OR INACCURACY IN ANY SUCH INFORMATION OR (III) ANY ACTION RESULTING THEREFROM.
		</p>		
	</div>
</div>

<style>
	.section-wrapper {
		min-height: calc(100vh - (70px - 2rem) - 150px);
	}
	.section {
		max-width: 768px;
		margin: 0px auto 50px auto;
		text-align: center;
		padding: 1rem;
	}
	h3 {
		text-align: left;
        text-transform: uppercase;
	}
	.disclaimer-text {
		text-align: justify;
	}	
	ul.b {
		text-align: justify;
  		list-style-type: square;
		font-size: 11px;
	}
	/* .field {
		display: flex;
		flex-direction: column;
		margin: 1rem;
		text-align: left;
	}
	label {
		color: #ccc;
		margin-bottom: 0.25rem;
	}
	input[type='number'] {
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 0.5rem;
		font-size: 16px;
		color: #202020;
		text-align: right;
		-moz-appearance: textfield;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input:focus-within {
		outline-color: #202020;
	}
	.actions {
		display: flex;
		margin: 1rem;
		gap: 0.4rem;
	}
	.max-amount {
		cursor: pointer;
		color: #999;
		user-select: none;
	} */
</style>
